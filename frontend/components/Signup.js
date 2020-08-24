import { useMutation, gql } from '@apollo/client';
import Form from './styles/Form';

const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      id
    }
  }
`;

function validateForm(username, email, password, passwordConf) {
  if (!username.length || !email.length || !password.length || !passwordConf.length) {
    alert('Please fill out all fields')!
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
        if (password.value != passwordConf.value) {
          alert('Passwords do not match.');
        } else {
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
      {error ? <div>{displayError}</div> : <></>}
      {displayError.length > 0 ? <div>{displayError}</div> : <></>}
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
