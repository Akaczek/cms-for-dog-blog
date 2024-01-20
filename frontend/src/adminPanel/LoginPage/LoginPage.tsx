import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LoginPageContainer,
  LoginForm,
  LoginFormButton,
  LoginFormContainer,
  LoginFormInput,
  LoginLogo,
  LoginErrorMessage,
} from './LoginPage.styles';
import { AuthContext } from '../../lib/context/authContext';
import logo from '../../assets/logo.png';

const LoginPage: FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = ((event.target as HTMLFormElement).elements[0] as HTMLInputElement).value;
    const password = ((event.target as HTMLFormElement).elements[1] as HTMLInputElement).value;
    const loggedUser = await login(email, password);
    if (loggedUser) {
      navigate('/admin');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <LoginLogo src={logo} />
        <LoginForm onSubmit={(e) => handleSubmit(e)}>
          {errorMessage && <LoginErrorMessage>{errorMessage}</LoginErrorMessage>}
          <LoginFormInput type='text' placeholder='Email' autoComplete='email'/>
          <LoginFormInput type='password' placeholder='Password' />
          <LoginFormButton>Login</LoginFormButton>
        </LoginForm>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
