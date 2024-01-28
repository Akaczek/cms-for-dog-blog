import { FC, FormEvent, useState, useContext, useEffect } from "react";

import { FormWrapper, Form, InputLabel, Input, WarningMessage } from '../../../../shared/Form';
import { AddDogInputWrapper } from "./AddEditDog.styles";
import { IAddEditDogProps } from "./AddEditDog.types";
import { ConfirmButton } from "../../../../shared/Buttons";
import { DogsContext } from "../../../../lib/context/dogsContext";

const AddEditDog: FC<IAddEditDogProps> = ({ dog, onClose }) => {
  const [name, setName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [averageLifeSpan, setAverageLifeSpan] = useState<string>('');
  const [temperament, setTemperament] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [availability, setAvailability] = useState<string>('');
  const [colors, setColors] = useState<string>('');
  const [grooming, setGrooming] = useState<string>('');

  const [warningMessage, setWarningMessage] = useState<string>('');

  const { addDog, editDog } = useContext(DogsContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const file = (document.getElementById('dogImage') as HTMLInputElement).files?.[0];
    if (!file && !dog) {
      setWarningMessage('Please upload an image');
      return;
    } else {
      setWarningMessage('');
    }
    if (name === '') {
      setWarningMessage('Please fill name field');
      return;
    } else {
      setWarningMessage('');
    }

    if (dog) {
      await editDog(dog.id, {
        name,
        imageUrl: dog.imageUrl,
        breedNumber: breed,
        averageLifeSpan,
        temperament,
        weight,
        availability,
        colors,
        grooming,
      }, file);
      onClose();
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('breedNumber', breed);
    formData.append('averageLifespan', averageLifeSpan);
    formData.append('temperament', temperament);
    formData.append('weight', weight);
    formData.append('availability', availability);
    formData.append('colors', colors);
    formData.append('grooming', grooming);
    formData.append('imageFile', file);
    await addDog(formData);
    onClose();    
  };

  useEffect(() => {
    if (dog) {
      setName(dog.name);
      setBreed(dog.breedNumber);
      setAverageLifeSpan(dog.averageLifeSpan);
      setTemperament(dog.temperament);
      setWeight(dog.weight);
      setAvailability(dog.availability);
      setColors(dog.colors);
      setGrooming(dog.grooming);
    }
  }, [dog]);

  return (
    <FormWrapper>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <AddDogInputWrapper>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Image</InputLabel>
          <Input
            type="file"
            id="dogImage"
            accept='.jpg,.jpeg,.png'
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Breed</InputLabel>
          <Input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Average life span</InputLabel>
          <Input
            type="text"
            value={averageLifeSpan}
            onChange={(e) => setAverageLifeSpan(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Temperament</InputLabel>
          <Input
            type="text"
            value={temperament}
            onChange={(e) => setTemperament(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Weight</InputLabel>
          <Input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Availability</InputLabel>
          <Input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Colors</InputLabel>
          <Input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
        </AddDogInputWrapper>
        <AddDogInputWrapper>
          <InputLabel>Grooming</InputLabel>
          <Input
            type="text"
            value={grooming}
            onChange={(e) => setGrooming(e.target.value)}
          />
        </AddDogInputWrapper>
        {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
        <ConfirmButton type="submit">{dog ? 'Edit' : 'Add'}</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default AddEditDog;