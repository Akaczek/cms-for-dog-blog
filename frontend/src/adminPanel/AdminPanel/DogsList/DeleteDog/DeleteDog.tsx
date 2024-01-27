import { FC, useContext } from "react";

import { IDeleteDogProps } from "./DeleteDog.types";
import { DogsContext } from "../../../../lib/context/dogsContext";
import { ConfirmButton } from "../../../../shared/Buttons";
import { ConfirmationMessage } from "../../../../shared/Form";

const DeleteDog: FC<IDeleteDogProps> = ({ dog, onClose }) => {
  const { deleteDog } = useContext(DogsContext);

  const handleDeletePage = async () => {
    await deleteDog(dog.id);
    onClose();
  };

  return (
    <>
      <ConfirmationMessage>
        Are you sure you want to delete this dog?
      </ConfirmationMessage>
      <ConfirmButton onClick={handleDeletePage}>Delete</ConfirmButton>
    </>
  );
};

export default DeleteDog;