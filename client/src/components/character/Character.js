import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCharacters } from "../../actions/characterActions";
import CharacterForm from "./Characterform";
import Card from "./Card";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      auth: this.props.auth,
      characters: this.props.characters.characters,
      newCharacter: {},
      selectedCharacter: {},
      createCharacter: false,
      showDetail: false,
      campaign: {},
      inCampaign: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.loopOverCharacters = this.loopOverCharacters.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCharacter) {
      // Add the newCharacter to the props.characters array upon submission
      this.props.characters.unshift(nextProps.newCharacter.data);
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

  loopOverCharacters(characters) {
    // Get all of the important info from within the characters that we just fetched
    return characters.map((char) => (
      char ? (
        <div key={char._id} className="col s12 m6">
          <Card characterFromParent={char} />
        </div>
      ) : (null))
    );
  }

  render() {
    var charItems = this.loopOverCharacters(this.props.characters);

    // Update state with the button
    const charForm = this.state.createCharacter ? (
      <div className="row">
        <CharacterForm />
      </div>
    ) : (null);

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
  newCharacter: PropTypes.object.isRequired,
  campaign: PropTypes.object.isRequired,
  inCampaign: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  characters: state.characters.characters,
  newCharacter: state.characters.newCharacter,
  campaign: state.campaigns.campaign,
  inCampaign: state.campaigns.inCampaign
});

// Map all of the required actions to the connect export
const actions = { fetchCharacters }

export default connect(
  mapStateToProps,
  actions
)(Character);
