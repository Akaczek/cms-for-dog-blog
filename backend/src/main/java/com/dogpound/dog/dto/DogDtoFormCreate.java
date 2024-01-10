package com.dogpound.dog.dto;

import com.dogpound.dog.Dog;
import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

@Value
public class DogDtoFormCreate {
    private String name;
    private String breedNumber;
    private String averageLifespan;
    private String temperament;
    private String weight;
    private String availability;
    private String colors;
    private String grooming;

    private String imageUrl;
    private MultipartFile imageFile;

    public Dog toDog() {
        Dog dog = new Dog();

        dog.setName(name);
        dog.setBreedNumber(breedNumber);
        dog.setAverageLifespan(averageLifespan);
        dog.setTemperament(temperament);
        dog.setWeight(weight);
        dog.setAvailability(availability);
        dog.setColors(colors);
        dog.setGrooming(grooming);

        return dog;
    }
}
