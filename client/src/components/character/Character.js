import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCharacters } from "../../actions/characterActions";
import CharacterForm from "./Characterform";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      auth: this.props.auth
    };
  }

  componentWillMount() {
    const charData = {
      owner: this.state.auth.user.email
    };
    this.props.fetchCharacters(charData);
  }

  loopOverClasses(char) {
    return char.classes.map(classInfo => (
      <div key={classInfo._id}>
        <h6>{classInfo.name}</h6>
        <p className="level">Level: {classInfo.level}</p>
      </div>
    ));
  }

  loopChars() {
    // Get all of the important info from within the characters that we just fetched
    return this.props.characters.map((char) => (
      <div key={char._id}>
        <h3>{char.name}</h3>
        <div className="" id="char-meta-details">
          {char.race}
          <div className="alignment"
            style= {{ display: "inline" }}>
            <p className="">{char.alignment.law}</p>
            <p className="">{char.alignment.chaos}</p>
          </div>
          {/* Load the classes div into the function */}
          {this.loopOverClasses(char)}
        </div>
      </div>
    ));
  }

  render() {
    const charItems = this.loopChars();
    return (
      <div className="col">
        <div className="row">
          <CharacterForm />
        </div>
        <div className="row">
          {charItems}
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
  newCharacter: PropTypes.object,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  characters: state.characters.items,
  newCharacter: state.characters.item
});

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(Character);
