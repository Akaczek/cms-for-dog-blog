import { FC, useContext } from "react";

import { IDeleteUserProps } from "./DeleteUser.types";
import { UsersContext } from "../../../../lib/context/usersContext";
import { ConfirmButton } from "../../../../shared/Buttons";
import { ConfirmationMessage } from "../../../../shared/Form";

const DeleteDog: FC<IDeleteUserProps> = ({ user, onClose }) => {
  const { deleteUser } = useContext(UsersContext);

  const handleDeleteUser = async () => {
    await deleteUser(user.id);
    onClose();
  };

  return (
    <>
      <ConfirmationMessage>
        Are you sure you want to delete this user?
      </ConfirmationMessage>
      <ConfirmButton onClick={handleDeleteUser}>Delete</ConfirmButton>
    </>
  );
};

export default DeleteDog;