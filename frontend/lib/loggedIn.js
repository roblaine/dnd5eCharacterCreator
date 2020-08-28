import { gql } from '@apollo/client';
import client from '../components/Client';

function loggedIn() {
  const user = client.readQuery({
    gql: `query readUser {
      user {
        id
      }
    }`,
  });
  return user && user.id;
}

export default loggedIn;
