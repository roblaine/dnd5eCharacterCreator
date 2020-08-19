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

const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      id
    }
  }
`;

const RegisterForm = () => {
  let username, email, password, passwordConf;
  const [signup, { error, data }] = useMutation(SIGNUP_MUTATION);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (passwordConf.value != password.value) {
          throw new Error(`Passwords dont match`);
        }
        signup({
          variables: {
            username: username.value,
            email: email.value,
            password: password.value,
            passwordConf: passwordConf.value,
          },
        });
        username.value = '';
        email.value = '';
        password.value = '';
        passwordConf.value = '';
      }}
    >
      {error ? <p>{error.message}</p> : <></>}
      <input
        ref={(node) => {
          username = node;
        }}
        id="username"
        key="username"
        type="text"
        placeholder="Username"
      />
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
      <input
        ref={(node) => {
          passwordConf = node;
        }}
        id="passwordConf"
        key="passwordConf"
        type="password"
        placeholder="Password Confirmation"
      />

      <button type="submit">Register</button>
    </StyledForm>
  );
};

export default RegisterForm;
