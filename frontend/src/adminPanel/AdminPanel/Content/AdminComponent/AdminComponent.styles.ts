import styled from "styled-components";

export const AdminComponentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const AdminComponentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 100;

  &:hover, &:focus, &:active {
    box-shadow: inset 0 0 0 10px ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;

export const AdminComponentNameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;