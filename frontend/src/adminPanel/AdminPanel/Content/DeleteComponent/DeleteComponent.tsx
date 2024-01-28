import { FC, useContext } from "react";

import { IDeleteComponentProps } from "./DeleteComponent.types";
import { PagesContext } from "../../../../lib/context/pagesContext";
import { ConfirmButton } from "../../../../shared/Buttons";
import { ConfirmationMessage } from "../../../../shared/Form";

const DeleteComponent: FC<IDeleteComponentProps> = ({ component, onClose }) => {
  const { deleteComponent } = useContext(PagesContext);

  const handleDeleteDog = async () => {
    await deleteComponent(component.id);
    onClose();
  };

  return (
    <>
      <ConfirmationMessage>
        Are you sure you want to delete this component?
      </ConfirmationMessage>
      <ConfirmButton onClick={handleDeleteDog}>Delete</ConfirmButton>
    </>
  );
};

export default DeleteComponent;