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
    <p>Loading...</p>;
  }
  if (error) {
    <p>{error.message}</p>;
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
