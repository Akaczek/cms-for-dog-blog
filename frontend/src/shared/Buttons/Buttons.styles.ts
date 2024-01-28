import styled from 'styled-components';

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.lightBrown};
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
  }
`;

export const AddComponentButton = styled.div`
  margin: 20px auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.orange};
  box-shadow: 0 0 30px 0 ${(props) => props.theme.colors.orange};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkerOrange};
    box-shadow: 0 0 30px 0 ${(props) => props.theme.colors.darkerOrange};
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const DeleteComponentButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.red};
  box-shadow: 0 0 30px 0 ${(props) => props.theme.colors.red};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkerRed};
    box-shadow: 0 0 30px 0 ${(props) => props.theme.colors.darkerRed};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
