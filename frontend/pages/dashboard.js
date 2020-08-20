import { gql, useQuery } from '@apollo/client';

const GET_ALL_CHARACTERS_QUERY = gql`
  query getCharacters {
    characters {
      id
      name
      statblock
      skills
      saves
      acCalc
      class
      level
      hitDie
      maxHp
      profBonus
      speed
    }
  }
`;

const Dashboard = () => {
  // TODO: Move this to a component
  function getCharacters() {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <>
        {data.characters ? (
          data.characters.map((char) => <h1>char.name</h1>)
        ) : (
          <p>You don't have any characters yet!</p>
        )}
      </>
    );
  }

  return <p>{getCharacters()}</p>;
};

export default Dashboard;
