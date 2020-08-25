import { gql, useQuery } from '@apollo/client';
import CreateCharacter from './CreateCharacter';

//TODO: Have this retrieve all of the required information
const GET_USERS_CHARACTERS_QUERY = gql`
  query getUsersCharacters {
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
      classes {
        id
        level
        templatedFrom {
          name
        }
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
    const { loading, error, data } = useQuery(GET_USERS_CHARACTERS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data.characters);

    return (
      <>
        {data.characters.length > 0 ? (
          data.characters.map((char) => (
            <div key={char.id}>
              <h1>{char.name}</h1>
            </div>
          ))
        ) : (
          <p>You don't have any characters yet!</p>
        )}
      </>
    );
  }

  return (
    <div>
      <h1>Your Characters</h1>
      <div>{getCharacters()}</div>
      <CreateCharacter />
    </div>
  );
};

export default Characters;
