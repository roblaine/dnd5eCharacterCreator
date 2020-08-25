const SingleCharacter = (props) => {
  let character = props.character;

  return (
    <div>
      <h1>
        {character.name} <button>Delete 🗑️</button>
      </h1>
      {character.classes.map((characterClass) => (
        <div>
          Level {characterClass.level} {characterClass.templatedFrom.name}
        </div>
      ))}
    </div>
  );
};

export default SingleCharacter;
