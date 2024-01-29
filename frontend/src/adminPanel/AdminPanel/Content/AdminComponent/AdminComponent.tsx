import { FC, useState, useContext } from 'react';

import deleteIcon from '../../../../assets/icons/delete.svg';
import {
  DogItem,
  Form,
  Gallery,
  HeroBanner,
  Links,
  Text,
} from '../../../../components';
import { addableComponentsTypes } from '../../../../lib/constants';
import { DeleteComponentButton } from '../../../../shared/Buttons';
import {
  AdminComponentNameWrapper,
  AdminComponentOverlay,
  AdminComponentWrapper,
} from './AdminComponent.styles';
import { IComponentProps } from './AdminComponent.types';
import { EditComponentContext } from '../../../../lib/context/editComponentContext';

const AdminComponent: FC<IComponentProps> = ({ component, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setComponent } = useContext(EditComponentContext);

  const renderComponent = () => {
    switch (component.type) {
      case addableComponentsTypes.DogItem:
        return <DogItem />;
      case addableComponentsTypes.Form:
        return <Form />;
      case addableComponentsTypes.Gallery:
        return <Gallery />;
      case addableComponentsTypes.HeroBanner:
        return <HeroBanner />;
      case addableComponentsTypes.Links:
        return <Links />;
      case addableComponentsTypes.TextWithImage:
        return <Text />;
      default:
        return null;
    }
  };

  return (
    <AdminComponentWrapper>
      <AdminComponentOverlay
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setComponent(component)}
      >
        {isHovered && (
          <AdminComponentNameWrapper>
            {component.type}
          </AdminComponentNameWrapper>
        )}
        <DeleteComponentButton
          onClick={(e) => {
            e.stopPropagation();
            onDelete(component);
          }}
          style={{ display: isHovered ? 'flex' : 'none' }}
        >
          <img src={deleteIcon} alt='delete' />
        </DeleteComponentButton>
      </AdminComponentOverlay>
      {renderComponent()}
    </AdminComponentWrapper>
  );
};

export default AdminComponent;
