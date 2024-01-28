import styled from "styled-components";

import { device } from "../../assets/theme";
import { TextWrapperProps, ImagePosition } from "./Text.types";

export const TextWrapper = styled.div<TextWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: ${({ $imagePosition }) => {
    switch ($imagePosition) {
      case ImagePosition.Left:
        return 'row';
      case ImagePosition.Right:
        return 'row-reverse';
      case ImagePosition.Top:
        return 'column';
      case ImagePosition.Bottom:
        return 'column-reverse';
      default:
        return 'row';
    }
  }};

  @media ${device.md} {
    flex-direction: ${({ $imagePosition }) => {
    switch ($imagePosition) {
      case ImagePosition.Left:
      case ImagePosition.Top:
        return 'column';
      case ImagePosition.Right:
      case ImagePosition.Bottom:
        return 'column-reverse';
      default:
        return 'column';
    }
  }};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 500px;
  width: 100%;
  flex-grow: 1;
`;

export const TextAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  flex-grow: 1;
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.darkGrey};
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightBrown};
  border: 2px solid ${(props) => props.theme.colors.lightBrown};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
    color: ${(props) => props.theme.colors.white};
  }
`;
