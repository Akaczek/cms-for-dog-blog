package com.dogpound.dog;

import com.dogpound.dog.dto.DogDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "dogs")
@Getter
@Setter
@NoArgsConstructor
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @NotEmpty(message = "Name must not be empty")
    @Column(name = "name")
    private String name;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "breedNumber")
    private String breedNumber;

    @Column(name = "averageLifespan")
    private String averageLifespan;

    @Column(name = "temperament")
    private String temperament;

    @Column(name = "weight")
    private String weight;

    @Column(name = "availability")
    private String availability;

    @Column(name = "colors")
    private String colors;

    @Column(name = "grooming")
    private String grooming;

    public Dog(DogDto dog) {
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
