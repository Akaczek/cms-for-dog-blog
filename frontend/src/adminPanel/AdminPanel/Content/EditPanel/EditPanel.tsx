import { FC, useContext } from 'react';

import {
  EditPanelWrapper,
  EditPanelHeader,
  EditPanelHeaderTitle,
  EditPanelSubheader,
} from './EditPanel.styles';
import { EditComponentContext } from '../../../../lib/context/editComponentContext';
import EditComponent from './EditComponent';
import EditLinks from './EditLinks';

const EditPanel: FC = () => {
  const { currentComponent } = useContext(EditComponentContext);

  return (
    <EditPanelWrapper>
      <EditPanelHeader>
        <EditPanelHeaderTitle>Edit</EditPanelHeaderTitle>
      </EditPanelHeader>
      {currentComponent ? (
        <>
          <EditPanelSubheader>{currentComponent?.type}</EditPanelSubheader>
          {currentComponent?.type === 'Links' ? (
            <EditLinks component={currentComponent} />
          ) : (
            <EditComponent component={currentComponent} />
          )}
        </>
      ) : (
        <EditPanelSubheader>Select component to edit</EditPanelSubheader>
      )}
    </EditPanelWrapper>
  );
};

export default EditPanel;
