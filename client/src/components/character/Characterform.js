import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacter } from '../../actions/characterActions';

class CharacterForm extends Component {
  componentWillMount() {
    this.props.fetchCharacters(this.props.auth.user);
  }

  render() {
    console.log(this.props.characters);
    const charItems = this.props.characters.map(char => (
      <li key={char.id}>
        <p>{char.name}</p>
      </li>
    ));

    return (
      <div className='center-align'>

      </div>
    );
  }
}

// CharacterForm.propTypes = {
//   addCharacter: PropTypes.func.isRequired,
//   characters: PropTypes.array.isRequired,
//   newCharacter: PropTypes.object
// }

const mapStateToProps = state => ({
  characters: state.characters.items,
  newCharacter: state.characters.item
});

export default connect(
  mapStateToProps,
  { addCharacter }
)(CharacterForm);
