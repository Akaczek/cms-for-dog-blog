import { FC } from 'react';

import close from '../../assets/icons/close.svg';
import { AddingModalContent, AddingModalWrapper, CloseButton, CloseButtonIcon, ModalTitle } from './Modal.styles';
import { IAddingModalProps } from './Modal.types';

export const AddingModal: FC<IAddingModalProps> = ({title, toggle, children}) => {
  return (
    <AddingModalWrapper onClick={() => toggle()}>
      <AddingModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => toggle()}>
          <CloseButtonIcon src={close}/>
        </CloseButton>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </AddingModalContent>
    </AddingModalWrapper>
  );
};

export default AddingModal;
