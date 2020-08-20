import { gql, useQuery } from '@apollo/client';

//TODO: Have this retrieve all of the required information
const GET_ALL_CHARACTERS_QUERY = gql`
  query getCharacters {
    characters {
      id
      name
      stats {
        id
      }
      skills {
        id
      }
      saves {
        id
      }
      acCalc
      class {
        id
      }
      hitDie {
        id
      }
      maxHp
      profBonus
    }
  }
`;

const Characters = () => {
  function getCharacters() {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <>
        {data.characters.length > 0 ? (
          data.characters.map((char) => <h1>char.name</h1>)
        ) : (
          <p>You don't have any characters yet!</p>
        )}
      </>
    );
  }

  return (
    <div>
      <h1>Your Characters</h1>
      <p>{getCharacters()}</p>
    </div>
  );
};

export default Characters;
