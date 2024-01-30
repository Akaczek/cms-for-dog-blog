import styled from "styled-components";
import { Link } from "react-router-dom";

export const SecondaryLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.grey};
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
  }

  &:visited {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const TertiaryLink = styled(Link)`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.lightGrey};
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
  }

  &:visited {
    color: ${(props) => props.theme.colors.black};
  }
`;