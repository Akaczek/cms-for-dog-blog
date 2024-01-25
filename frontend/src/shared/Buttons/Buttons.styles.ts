import styled from "styled-components";

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