package com.dogpound.dog.dto;

import com.dogpound.dog.Dog;
import lombok.Value;

@Value
public class DogDtoFormUpdate {
    private String name;
    private String breedNumber;
    private String averageLifespan;
    private String temperament;
    private String weight;
    private String availability;
    private String colors;
    private String grooming;

    public void updateDog(Dog dog) {
        if (name != null) dog.setName(name);
        if (breedNumber != null) dog.setBreedNumber(breedNumber);
        if (averageLifespan != null) dog.setAverageLifespan(averageLifespan);
        if (temperament != null) dog.setTemperament(temperament);
        if (weight != null) dog.setWeight(weight);
        if (availability != null) dog.setAvailability(availability);
        if (colors != null) dog.setColors(colors);
        if (grooming != null) dog.setGrooming(grooming);
    }
}
