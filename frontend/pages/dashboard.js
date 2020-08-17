import { gql, useQuery } from '@apollo/client';

const GET_ALL_CHARACTERS_QUERY = gql`
  query getUsers {
    users {
      name
    }
  }
`;

const Dashboard = () => {
  function getCharacters() {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS_QUERY);
    if (loading) return 'Loading...';
    console.log(data);
    if (error) return `Error! ${error.message}`;

    return (
      <div>
        characters
        {data.characters.map((char) => (
          <h1>char.name</h1>
        ))}
      </div>
    );
  }

  return <p>{getCharacters()}</p>;
};

export default Dashboard;
