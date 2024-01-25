import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 50%;
  padding: 20px;
  font-size: 24px;
`;

export const InputLabel = styled.label`
  font-size: 24px;
  font-weight: 600;
`;

export const InputPrefix = styled.span`
  margin-right: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Checkbox = styled.input`
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

export const WarningMessage = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.red};
`;