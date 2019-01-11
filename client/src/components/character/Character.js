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
      auth: this.props.auth,
      characters: [],
      newCharacter: {},
      createCharacter: false,
      showDetail: false,
      selectedCharacter: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.loopOverClasses = this.loopOverClasses.bind(this);
    this.loopChars = this.loopChars.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCharacter) {
      this.props.characters.unshift(nextProps.newCharacter);
    }
  }

  componentWillMount() {
    const charData = {
      owner: this.state.auth.user.email
    };

    this.props.fetchCharacters(charData);
  }

  handleClick = e => {
    // Check target for toggle as the id before assigning value
    const target = e.target;
    const name = target.name;
    // Find the value in the state tree by name key, and invert it
    const value = target.id === "toggle" ? !this.state[name] : target.value;
    this.setState({ [name]: value });
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  loopOverClasses(char) {
    return char.classes.map(classInfo => {
      // Uppercase the class name
      const className = this.capitalize(classInfo.name);
      return(
        <p key={classInfo._id}>Level {classInfo.level} {className}</p>
      )
    });
  }

  loopChars(characters) {
    // Get all of the important info from within the characters that we just fetched
    return characters.map((char) => (
      <div key={char._id} className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{char.name}</span>
            {this.loopOverClasses(char)}
            <p className="">{this.capitalize(char.alignment.law)} {this.capitalize(char.alignment.evil)}</p>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn blue"
              name="showDetail"
              id="toggle"
              value={this.state.showDetail}
              onClick={this.handleClick}>Show Full Detail
            </button>
            <button
              className="waves-effect waves-light btn blue"
              name="selectedCharacter"
              id="selectedCharacter"
              value={char._id}
              onClick={this.handleClick}>Select Character
            </button>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const charItems = this.loopChars(this.props.characters);
    // Update state with the button
    const charForm = this.state.createCharacter ? (
      <div className="row">
        <CharacterForm />
      </div>
    ) : (null)

    return (
      <div className="col">
        {charForm}
        {/* Button to open the character create form */}
        <button
          style={{ marginTop: "20px", marginBottom: "20px" }}
          className="waves-effect waves-light btn blue"
          type="submit"
          id="toggle"
          value={this.state.createCharacter}
          name="createCharacter"
          onClick={this.handleClick}>
          {this.state.createCharacter ?
            'Close Form' :
            'Create Character'
          }
        </button>
        <h1>My Characters</h1>
        <div className="row left-align">
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
  newCharacter: state.characters.item.data
});

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(Character);
