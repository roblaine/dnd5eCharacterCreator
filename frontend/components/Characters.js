import { gql, useQuery } from '@apollo/client';
import CreateCharacter from './CreateCharacter';
import SingleCharacter from './SingleCharacter';

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
        name
        level
        belongsTo {
          name
        }
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
    if (error) return `${error.message.split('error:')[1]}`;

    return (
      <>
        {data.characters.length > 0 ? (
          data.characters.map((character) => (
            <SingleCharacter key={character.id} character={character} />
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
      <CreateCharacter />
      <div>{getCharacters()}</div>
    </div>
  );
};

export default Characters;
