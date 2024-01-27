import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  padding: 20px;
  font-size: 24px;
`;

export const FixeWidthInputWrapper = styled(InputWrapper)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
`;

export const InputLabel = styled.label`
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

export const WarningMessage = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.red};
`;

export const ConfirmationMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;
