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
    this.loopOverCharacters = this.loopOverCharacters.bind(this);
    this.loopOverItems = this.loopOverItems.bind(this);
    this.equippedWeapon = this.equippedWeapon.bind(this);
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

  loopOverItems(items) {
    return items.map(item => (
      <div key={item._id}>

      </div>
    ));
  }

  // Finds the equipped weapon for display purposes
  equippedWeapon(weapons) {
    weapons.forEach(weapon => {
      if(weapon.equipped) {
        return weapon;
      }
    });
  }

  loopOverCharacters(characters) {
    // Get all of the important info from within the characters that we just fetched
    return characters.map((char) => (
      <div key={char._id} className="col s12 m6">
        <div className="card medium">
          {/* <div className="waves-effect waves-block waves-light">
            <img
              className="activator"
              src="images/class.jpg"
              alt="Picture of class"
            />
          </div> */}
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4">
              <h5>
                {char.name}
                <i className="material-icons right">more_vert</i>
              </h5>
            </span>
            <div>
              {this.loopOverClasses(char)}
            </div>
            <div>
              {this.capitalize(char.alignment.law)} {this.capitalize(char.alignment.evil)}
            </div>
            <div>

            </div>
            <button
              className="waves-effect waves-light btn blue"
              name="selectedCharacter"
              id="selectedCharacter"
              value={char._id}
              onClick={this.handleClick}>
              Select Character
            </button>
          </div>
          {/* Expand content for the card */}
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <h5>
                {char.name}
                <i className="material-icons right">close</i>
              </h5>
            </span>
            <div className="row">
              <h5 className="center-align">
                Combat
              </h5>
              <div className="col s4 center-align">
                <h6>
                  Speed
                </h6>
                <p>
                  {char.combat.speed}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Armor Class
                </h6>
                <p>
                  {char.combat.ac}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Initiative
                </h6>
                <p>
                  {char.combat.initiative}
                </p>
              </div>
            </div>
            <div className="row">
              <h5 className="center-align">
                Hitpoints
              </h5>
              <div className="col s4 center-align">
                <h6>
                  Maximum
                </h6>
                <p>
                  {char.hitpoints.max}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Current
                </h6>
                <p>
                  {char.hitpoints.current}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Temporary
                </h6>
                <p>
                  {char.hitpoints.temp}
                </p>
              </div>
            </div>
            {/* inventory */}
            <div className="row center-align">
              <div className="row center-align">
                {/* Currently equipped weapon */}
                {/* {this.equippedWeapon(char.inventory.weapons)} */}
              </div>
              <div className="row center-align">
                <h5>Inventory</h5>
                {/* Loop over the items in inventory */}
                {this.loopOverItems(char.inventory.items)}
              </div>
            </div>

          </div>
        </div>
      </div>
    ));
  }

  render() {
    const charItems = this.loopOverCharacters(this.props.characters);
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
