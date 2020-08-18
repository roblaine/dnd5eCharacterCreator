import styled from 'styled-components';
import { useMutation, gql } from '@apollo/client';

const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;

  input {
    flex-grow: 1;
    margin: 0.2em 0 0.2em 0;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login {
    login() {
      id
      name
      email
    }
  }
`;

class LoginForm extends React.Component {
  render() {
    const { loading, error, data } = useMutation(LOGIN_MUTATION);
    return (
      <StyledForm action="/" method="POST">
        <input key="email" type="text" placeholder="Email" />
        <input key="pass" type="password" placeholder="Password" />

        <input
          key="sibmit-button"
          id="submit-button"
          type="submit"
          value="Login"
        />
      </StyledForm>
    );
  }
}

export default LoginForm;
