import { useMutation, gql } from '@apollo/client';
import Form from './styles/Form';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

const Login = () => {
  let displayError = '';
  const [login, { error, loading }] = useMutation(LOGIN_MUTATION);
  if (error) {
    displayError = error.message.split('error:')[1];
  }
  return (
    <>
      {displayError ? <p>{displayError}</p> : <></>}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login({
            variables: { email: email.value, password: password.value },
          });
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

        {loading ? <p>Loading...</p> : <p></p>}
      </Form>
    </>
  );
};

export default Login;
