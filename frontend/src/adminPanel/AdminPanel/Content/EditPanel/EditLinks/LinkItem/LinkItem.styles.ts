import styled from "styled-components";

export const LinkItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 5px solid ${(props) => props.theme.colors.grey};
`;

export const LinkItemValue = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

export const LinkItemButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const LinkItemButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
`;