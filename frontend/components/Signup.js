import { useMutation, gql } from '@apollo/client';
import client from './Client';
import Form from './styles/Form';

const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      id
    }
  }
`;

function formIsValid(username, email, password, passwordConf) {
  if (
    !username.value.length ||
    !email.value.length ||
    !password.value.length ||
    !passwordConf.value.length
  ) {
    alert('Please fill out all fields');
    return false;
  }
  if (password.value != passwordConf.value) {
    alert('Entered passwords do not match.');
    return false;
  }
  return true;
}

const Signup = () => {
  let username,
    email,
    password,
    passwordConf,
    displayError = '';
  const [signup, { error, data }] = useMutation(SIGNUP_MUTATION);

  if (error) {
    displayError = error.message.split('error:')[1];
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (formIsValid(username, email, password, passwordConf)) {
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
        }
      }}
    >
      {displayError ? <div>{displayError}</div> : <></>}
      <fieldset>
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
      </fieldset>
    </Form>
  );
};

export default Signup;
