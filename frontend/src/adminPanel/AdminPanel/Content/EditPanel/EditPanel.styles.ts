import styled from "styled-components";

export const EditPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey};
  overflow-y: scroll;
`;

export const EditPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
`;

export const EditPanelHeaderTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-weight: 600;
`;

export const EditPanelSubheader = styled.p`
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
`;

export const AddLinkButton = styled.button`
  margin: 10px 0 0 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
`;