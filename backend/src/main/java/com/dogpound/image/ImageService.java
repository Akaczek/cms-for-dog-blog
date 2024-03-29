package com.dogpound.image;

import com.dogpound.image.exceptions.ImageException;
import com.dogpound.image.exceptions.ImageExceptionType;
import com.dogpound.image.exceptions.ImageNotFound;
import com.dogpound.validation.exceptions.RestIOException;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.PathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class ImageService {

    private final Path imageStorageDirectory;
    Logger logger = LoggerFactory.getLogger(ImageService.class);

    @Autowired
    public ImageService(@Value("${image-storage-directory}") Path imageStorageDirectory) {
        this.imageStorageDirectory = imageStorageDirectory;
        logger.info("Image Storage Directory " + imageStorageDirectory);
    }

    @PostConstruct
    public void ensureDirectoryExists() throws IOException {
        if (!Files.exists(imageStorageDirectory)) {
            Files.createDirectories(imageStorageDirectory);
        }
    }

    public PathResource getImage(String fileName) {
        Path targetPath = resolveFile(fileName);
        if (!Files.exists(targetPath)) {
            throw new ImageNotFound();
        }

        return new PathResource(targetPath);
    }

    public String uploadImage(MultipartFile imageFile) {
        String fileExtension = Optional.ofNullable(imageFile.getOriginalFilename())
                .flatMap(ImageService::getFileExtension)
                .orElse("");

        String targetFileName = getTargetFileName(imageFile.getOriginalFilename()) + "." + fileExtension;
        Path targetPath = resolveFile(targetFileName);
        logger.info("Target Path " + targetPath);

        try (InputStream in = imageFile.getInputStream()) {
            try (OutputStream out = Files.newOutputStream(targetPath, StandardOpenOption.CREATE)) {
                in.transferTo(out);
            }
        } catch (IOException ex) {
            throw new RestIOException("ERRORS.IMAGE.500.UPLOAD");
        }

        return targetFileName;
    }

    public void deleteImage(String fileName) {
        if (fileName == null) return;
        Path targetPath = resolveFile(fileName);

        try {
            Files.delete(targetPath);
        } catch (NoSuchFileException e1) {
            throw new ImageNotFound();
        } catch (IOException e2) {
            throw new RestIOException("ERRORS.IMAGE.500.DELETE");
        }
    }

    public void validateImageUrlOrFile(String imageUrl, MultipartFile imageFile) {
        if (imageUrl == null && imageFile == null) {
            throw new ImageException(ImageExceptionType.URL_OR_FILE);
        } else if (imageUrl != null && imageFile != null) {
            throw new ImageException(ImageExceptionType.URL_OR_FILE);
        }
    }

    private static Optional<String> getFileExtension(String fileName) {
        final int indexOfLastDot = fileName.lastIndexOf('.');

        if (indexOfLastDot == -1) {
            return Optional.empty();
        } else {
            return Optional.of(fileName.substring(indexOfLastDot + 1));
        }
    }

    private String getBaseName(String fileName) {
        final int indexOfLastDot = fileName.lastIndexOf('.');

        if (indexOfLastDot == -1) {
            return fileName;
        } else {
            return fileName.substring(0, indexOfLastDot);
        }
    }

    private String getTargetFileName(String originalFilename) {
        return getBaseName(originalFilename)
                + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHHmmss"));
    }

    private Path resolveFile(String fileName) {
        try {
            return imageStorageDirectory.resolve(fileName);
        } catch (InvalidPathException ex) {
            throw new ImageException(ImageExceptionType.INVALID_PATH);
        }
    }
}
