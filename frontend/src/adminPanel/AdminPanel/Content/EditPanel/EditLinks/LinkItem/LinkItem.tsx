import { FC, useState, useContext } from 'react';

import {
  LinkItemWrapper,
  LinkItemButton,
  LinkItemButtons,
  LinkItemValue,
} from './LinkItem.styles';
import { ILinkItemProps } from './LinkItem.types';
import { EditComponentContext } from '../../../../../../lib/context/editComponentContext';
import { WarningMessage } from '../../../../../../shared/Form';

const LinkItem: FC<ILinkItemProps> = ({ link }) => {
  const [text, setText] = useState(link.text);
  const [path, setPath] = useState(link.path);
  const [warning, setWarning] = useState('');

  const { updateLinkInComponent, deleteLinkFromComponent } = useContext(EditComponentContext);

  const handleDelete = async () => {
    await deleteLinkFromComponent(link.id);
  };

  const handleEdit = async () => {
    if (text === '' || path === '') {
      setWarning('Values cannot be empty');
      return;
    }
    await updateLinkInComponent(link.id, text, path);
    setWarning('');
  };

  return (
    <LinkItemWrapper>
      {warning && <WarningMessage>{warning}</WarningMessage>}
      <LinkItemValue
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <LinkItemValue
        type='text'
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <LinkItemButtons>
        <LinkItemButton onClick={handleDelete}>Delete</LinkItemButton>
        <LinkItemButton onClick={handleEdit}>Edit</LinkItemButton>
      </LinkItemButtons>
    </LinkItemWrapper>
  );
};

export default LinkItem;
