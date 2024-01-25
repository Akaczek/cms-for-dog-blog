import styled from "styled-components";

export const AddingModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.transparentBlack};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AddingModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 50px;
  width: 80%;
  height: 80%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const CloseButtonIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ModalTitle = styled.h3`
  margin-top: 20px;
  font-size: 48px;
  font-weight: 600;
`;