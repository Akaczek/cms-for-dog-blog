import styled from "styled-components";
import { device } from "../../assets/theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${device.md} {
    width: unset;
    flex-direction: column;
    margin: 0 10px;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media ${device.md} {
    flex-direction: column;
    gap: 0;
  }
`;

export const UserInfoInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  margin-bottom: 0.5rem;
  flex-grow: 1;

  &::placeholder {
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
  }
`;

export const UserInfoTextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
  }
`;

export const FormButton = styled.button`
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