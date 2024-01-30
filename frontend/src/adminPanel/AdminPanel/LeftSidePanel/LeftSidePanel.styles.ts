import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LeftSidePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 100vh;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
`;

export const LeftSidePanelLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LeftSidePanelLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const LeftSidePanelLinkIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export const LeftSidePanelLinkLogo = styled.img`
  width: 70px;
  height: auto;
`;

export const LogOutButton = styled.button`
  margin: 0.5rem 5px 0.5rem 5px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.red};
  border: 2px solid ${(props) => props.theme.colors.red};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  width: calc(100% - 10px);

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ChangePasswordButton = styled.button`
  margin: auto 5px 0.5rem 5px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightBrown};
  border: 2px solid ${(props) => props.theme.colors.lightBrown};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
    color: ${(props) => props.theme.colors.white};
  }
`;
