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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

const LoginForm = () => {
  let email, password;
  const [login, { data }] = useMutation(LOGIN_MUTATION);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        login({
          variables: { email: email.value, password: password.value },
        });
        email.value = '';
        password.value = '';
      }}
    >
      <input
        ref={(node) => {
          email = node;
        }}
        id="email"
        key="email"
        type="text"
        placeholder="Email"
      />
      <input
        ref={(node) => {
          password = node;
        }}
        id="password"
        key="password"
        type="password"
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </StyledForm>
  );
};

export default LoginForm;
