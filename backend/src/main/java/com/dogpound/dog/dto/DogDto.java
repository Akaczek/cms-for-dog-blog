package com.dogpound.dog.dto;

import com.dogpound.dog.Dog;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DogDto {
    private Long id;
    private String name;
    private String imageUrl;
    private String breedNumber;
    private String averageLifespan;
    private String temperament;
    private String weight;
    private String availability;
    private String colors;
    private String grooming;

    public static DogDto of(Dog dog) {
        if (dog == null) {
            return null;
        }
        return new DogDto(dog);
    }

    private DogDto(Dog dog) {
        this.id = dog.getId();
        this.name = dog.getName();
        this.imageUrl = dog.getImageUrl();
        this.breedNumber = dog.getBreedNumber();
        this.averageLifespan = dog.getAverageLifespan();
        this.temperament = dog.getTemperament();
        this.weight = dog.getWeight();
        this.availability = dog.getAvailability();
        this.colors = dog.getColors();
        this.grooming = dog.getGrooming();
    }
}
