import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: 0;
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 10px;
`;

export const LoginLogo = styled.img`
  margin-top: 40px;
  max-width: 162px;
  height: auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  margin: 0;
  padding: 0;
`;

export const LoginFormInput = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 10px;
`;

export const LoginFormButton = styled.button`
  width: 200px;
  margin-top: 20px;
  padding: 10px 20px;
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

export const LoginErrorMessage = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.red};
  font-size: 14px;
  font-weight: 600;
`;
