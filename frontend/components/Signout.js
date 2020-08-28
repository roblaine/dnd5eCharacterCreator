import { gql, useMutation } from '@apollo/client';
import client from './Client';

const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
      message
    }
  }
`;

const REMOVE_USER_ID_FROM_CACHE_QUERY = gql`
  query readUserID {
    user {
      id
    }
  }
`;

const Signout = (props) => {
  const [signout, { loading, error }] = useMutation(SIGNOUT_MUTATION);
  const userID = client.readQuery({
    query: REMOVE_USER_ID_FROM_CACHE_QUERY,
  });
  if (loading) {
    return `Loading...`;
  }

  if (error) {
    return `${error.message.split('error:')[1]}`;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userID);
        signout();
      }}
    >
      <button>Sign out</button>
    </form>
  );
};

export default Signout;
