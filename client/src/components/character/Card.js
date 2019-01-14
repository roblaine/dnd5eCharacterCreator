import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCharacter, selectCharacter } from "../../actions/characterActions";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      auth: this.props.auth,
      selectedCharacter: {},
      char: this.props.characterFromParent
    };

    this.handleClick = this.handleClick.bind(this);
    this.loopOverClasses = this.loopOverClasses.bind(this);
    this.loopOverItems = this.loopOverItems.bind(this);
    this.equippedWeapon = this.equippedWeapon.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {
    const charData = {
      owner: this.state.auth.user.email
    };
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

  render() {
    return (

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
                {this.state.char.name}
                <i className="material-icons right">more_vert</i>
              </h5>
            </span>
            <div>
              {this.loopOverClasses(this.state.char)}
            </div>
            <div>
              {this.capitalize(this.state.char.alignment.law)} {this.capitalize(this.state.char.alignment.evil)}
            </div>
            <div>

            </div>
            <button
              className="waves-effect waves-light btn blue"
              name="selectedthis.state.character"
              id="selectedthis.state.character"
              value={this.state.char._id}
              onClick={(e) => {
                if (window.confirm('Are you sure you wish to select this this.state.character?')) {
                  this.props.selectthis.state.character(e)
                }
              }
            }>
              Select this.state.character
            </button>
            <button
              className="waves-effect waves-light btn blue"
              name="deletethis.state.character"
              id="deletethis.state.character"
              value={this.state.char._id}
              onClick={(e) => {
                if (window.confirm('Are you sure you wish to delete this this.state.character?')) {
                  this.props.deletethis.state.character(e)
                }
              }
            }>
              Delete this.state.character
            </button>
          </div>
          {/* Expand content for the card */}
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <h5>
                {this.state.char.name}
                <i className="material-icons right">close</i>
              </h5>
            </span>
            <div className="row">
              <h5 style={{textDecoration: "underline"}} className="center-align">
                Combat
              </h5>
              <div className="col s4 center-align">
                <h6>
                  Speed
                </h6>
                <p>
                  {this.state.char.combat.speed}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Armor Class
                </h6>
                <p>
                  {this.state.char.combat.ac}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Initiative
                </h6>
                <p>
                  {this.state.char.combat.initiative}
                </p>
              </div>
            </div>
            <div className="row">
              <h5 style={{textDecoration: "underline"}} className="center-align">
                Hitpoints
              </h5>
              <div className="col s4 center-align">
                <h6>
                  Maximum
                </h6>
                <p>
                  {this.state.char.hitpoints.max}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Current
                </h6>
                <p>
                  {this.state.char.hitpoints.current}
                </p>
              </div>
              <div className="col s4 center-align">
                <h6>
                  Temporary
                </h6>
                <p>
                  {this.state.char.hitpoints.temp}
                </p>
              </div>
            </div>
            {/* inventory */}
            <div className="row center-align">
              <h5 style={{textDecoration: "underline"}}>Inventory</h5>
              <div className="row center-align">
                <h6>Currently Equipped Weapon</h6>
                {/* Currently equipped weapon */}
                {this.equippedWeapon(this.state.char.inventory.weapons)}
              </div>
              <div className="row center-align">
                {/* Loop over the items in inventory */}
                {this.loopOverItems(this.state.char.inventory.items)}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Card.propTypes = {
  deleteCharacter: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Map all of the required actions to the connect export
const actions = { deleteCharacter, selectCharacter }

export default connect(
  mapStateToProps,
  actions
)(Card);
