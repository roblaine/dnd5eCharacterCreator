import { gql } from '@apollo/client';
import client from '../components/Client';

const LOGGED_IN_QUERY = gql`
  query readUser {
    user {
      loggedIn
    }
  }
`;

function loggedIn() {
  const user = client.readQuery({
    query: LOGGED_IN_QUERY,
  });
  return user && user.id;
}

export default loggedIn;
