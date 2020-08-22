import { useMutation, gql } from '@apollo/client';
import Form from './styles/Form';

const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      id
    }
  }
`;

const Signup = () => {
  let username, email, password, passwordConf;
  const [signup, { error, data }] = useMutation(SIGNUP_MUTATION);

  return (
    <Form
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
