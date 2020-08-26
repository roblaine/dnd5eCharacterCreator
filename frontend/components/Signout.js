import { gql, useMutation } from '@apollo/client';
const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
      message
    }
  }
`;
const Signout = (props) => {
  const [signout, { loading, error }] = useMutation(SIGNOUT_MUTATION);
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
        signout();
      }}
    >
      <button>Sign out</button>
    </form>
  );
};
export default Signout;
