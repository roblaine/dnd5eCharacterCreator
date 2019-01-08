import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../actions/characterActions';

class Character extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
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
        {charItems}
      </div>
    );
  }
}

Character.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
  newCharacter: PropTypes.object
}

const mapStateToProps = state => ({
  characters: state.characters.items,
  newCharacter: state.characters.item
});

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(Character);
