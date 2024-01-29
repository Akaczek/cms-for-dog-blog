import { FC, useState } from 'react';

import addIcon from '../../../assets/icons/add_without_circle.svg';
import { Footer, Header } from '../../../components';
import { useModal } from '../../../lib/hooks';
import { Component } from '../../../lib/types';
import { AddComponentButton } from '../../../shared/Buttons';
import Modal from '../../../shared/Modal';
import AddComponent from './AddComponent';
import AdminComponent from './AdminComponent';
import { IContentProps } from './Content.types';
import DeleteComponent from './DeleteComponent';
import { MainViewWrapper } from '../AdminPanel.styles';

const Content: FC<IContentProps> = ({ page }) => {
  const [isAddComponentModalOpen, toggleAddComponentModalOpen] = useModal();
  const [isDeleteComponentModalOpen, toggleDeleteComponentModalOpen] = useModal();
  const [addPosition, setAddPosition] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  const handleAddComponent = (position: number) => {
    toggleAddComponentModalOpen();
    setAddPosition(position);
  };

  const handleDeleteComponent = (component: Component) => {
    setSelectedComponent(component);
    toggleDeleteComponentModalOpen();
  };

  return (
    <MainViewWrapper>
      {isAddComponentModalOpen && (
        <Modal title='Add component' toggle={toggleAddComponentModalOpen}>
          <AddComponent
            pageId={page.id}
            order={addPosition}
            toggle={toggleAddComponentModalOpen}
          />
        </Modal>
      )}
      {isDeleteComponentModalOpen && (
        <Modal title='Delete component' toggle={toggleDeleteComponentModalOpen}>
          <DeleteComponent
            component={selectedComponent}
            onClose={toggleDeleteComponentModalOpen}
          />
        </Modal>
      )}
      <Header />
      {page && (
        <>
          <AddComponentButton onClick={() => handleAddComponent(1)}>
            <img src={addIcon} alt='add' />
          </AddComponentButton>
          {page.components.sort(
            (a, b) => a.order - b.order
          ).map((component, idx) => (
            <>
              <AdminComponent key={component.id} component={component} onDelete={handleDeleteComponent}/>
              <AddComponentButton onClick={() => handleAddComponent(idx + 2)}>
                <img src={addIcon} alt='add' />
              </AddComponentButton>
            </>
          ))}
        </>
      )}
      <Footer />
    </MainViewWrapper>
  );
};

export default Content;
