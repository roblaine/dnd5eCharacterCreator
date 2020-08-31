import { useMutation, gql } from '@apollo/client';
import Form from './styles/Form';
import client from './Client';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

const LOGGED_IN_QUERY = gql`
  query loggedInUser {
    user {
      id
      loggedIn
    }
  }
`;

const Signin = () => {
  let displayError = '';
  const [login, { data: returnedData, error, loading }] = useMutation(
    LOGIN_MUTATION,
    // TODO Implement a cache update on signin, redirect user to the dashboard upon signin
    // {
    //   onCompleted: (returnedData) => {
    //     console.log(
    //       `Successfully completed the signin! Updating Cache with user id ${returnedData.login.id}`,
    //     );

    //     client.writeQuery({
    //       query: LOGGED_IN_QUERY,
    //       variables: {
    //         id: returnedData.login.id,
    //       },
    //       data: {
    //         loggedIn: true,
    //       },
    //     });

    //     const loggedIn = client.readQuery({
    //       query: LOGGED_IN_QUERY,
    //     });
    //     console.log(loggedIn);
    //   },
    // },
  );
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
        <button type="submit">Signin</button>

        {loading ? <p>Loading...</p> : <p></p>}
      </Form>
    </>
  );
};

export { LOGGED_IN_QUERY };
export default Signin;
