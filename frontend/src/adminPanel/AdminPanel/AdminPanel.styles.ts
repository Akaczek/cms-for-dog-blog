import styled from 'styled-components';

export const LogOutButton = styled.button`
  padding: 0.5rem;
  width: 300px;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  background-color: #fff;
  cursor: pointer;
  margin: 0.5rem auto;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;
