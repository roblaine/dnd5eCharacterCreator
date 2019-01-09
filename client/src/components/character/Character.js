import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../actions/characterActions';

class Character extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
  }

  render() {
    const charItems = this.props.characters.map((char) => (
      <div key={char._id}>
        <h3>{char.name}</h3>
        <div>
          {char.race}
        </div>
      </div>
    ));

    return (
      <div class="row">
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
