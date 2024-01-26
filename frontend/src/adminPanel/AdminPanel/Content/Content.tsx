import { FC, useState } from 'react';

import { Header, Footer } from '../../../components';
import { IContentProps } from './Content.types';
import AdminComponent from './AdminComponent';
import { AddComponentButton } from '../../../shared/Buttons';
import addIcon from '../../../assets/icons/add_without_circle.svg';
import Modal from '../../../shared/Modal';
import { useModal } from '../../../lib/hooks';
import { Component } from '../../../lib/types';

const Content: FC<IContentProps> = ({ page }) => {
  const [isAddComponentModalOpen, toggleAddComponentModalOpen] = useModal();
  const [addPosition, setAddPosition] = useState<number>(0);
  const [components, setComponents] = useState<Component[] | null>(page?.components);

  const handleAddComponent = (position: number) => {
    toggleAddComponentModalOpen();
    setAddPosition(position);
  };

  return (
    <>
      {isAddComponentModalOpen && (
        <Modal title='Add component' toggle={toggleAddComponentModalOpen}>
          <h3>{addPosition}</h3>
        </Modal>
      )}
      <Header />
      {page && (
        <>
          <AddComponentButton onClick={() => handleAddComponent(0)}>
            <img src={addIcon} alt='add' />
          </AddComponentButton>
          {page.components.map((component, idx) => (
            <>
              <AdminComponent key={component.id} component={component} />
              <AddComponentButton onClick={() => handleAddComponent(idx + 1)}>
                <img src={addIcon} alt='add' />
              </AddComponentButton>
            </>
          ))}
        </>
      )}
      <Footer />
    </>
  );
};

export default Content;
