const SingleCharacter = (props) => {
  let character = props.character;

  return (
    <div>
      <h1>
        {character.name} <button>Delete 🗑️</button>
      </h1>
      {character.classes.map((characterClass) => (
        <div key={characterClass.id}>
          Level {characterClass.level} {characterClass.templatedFrom.name}
        </div>
      ))}
    </div>
  );
};

export default SingleCharacter;
