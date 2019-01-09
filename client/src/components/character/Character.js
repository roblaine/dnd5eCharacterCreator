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
      <li class="tab col s3"><a href="#test1" key={char._id}>
          {char.name}
        </a>
      </li>
    ));

    return (
      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            {charItems}
          </ul>
        </div>
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
