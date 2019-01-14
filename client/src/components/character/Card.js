import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCharacter, joinCampaign, leaveCampaign } from "../../actions/characterActions";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      auth: this.props.auth,
      cardCharacter: this.props.characterFromParent,
      charData: {},
      selectedCharacter: {},
      deletedCharacter: {},
      campaignId: '',
      playerId: '',
      characterId: '',
      inCampaign: this.props.inCampaign
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loopOverClasses = this.loopOverClasses.bind(this);
    this.loopOverItems = this.loopOverItems.bind(this);
    this.equippedWeapon = this.equippedWeapon.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Load errors if they exist into props
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentWillMount() {
    const charData = {
      owner: this.state.auth.user.email
    };

    this.setState({ charData: charData })
  }

  onChange = e => {
    this.setState({
      campaignId: e.target.value
    });
  }

  handleClick = e => {
    // Assign the seelcted character or deleted character
    const target = e.target;
    const id = target.id;
    const value = target.value

    this.setState({ [id]: value });
  }

  onSubmit = e => {
    e.preventDefault();

    const campaignData = {
      characterId: this.state.cardCharacter._id,
      playerId: this.state.cardCharacter.owner,
      campaignId: this.state.campaignId
    };

    this.state.inCampaign ?
      this.props.leaveCampaign(campaignData) :
      this.props.joinCampaign(campaignData);
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
    if(items) {
      return items.map(item => (
        <div key={item._id}>

        </div>
      ));
    }
  }

  // Finds the equipped weapon for display purposes
  equippedWeapon(weapons) {
    if(weapons) {
      weapons.forEach(weapon => {
        if(weapon.equipped) {
          return weapon;
        }
      });
    }
  }

  render() {
    const { errors } = this.props;
    const inCampaign = this.state.inCampaign;

    return (
      <div className="card medium">
        {/* Add an image here */}
        <div className="card-content">
          <span
            className="card-title activator grey-text text-darken-4">
            <h5>
              {this.state.cardCharacter.name}
              <i className="material-icons right">more_vert</i>
            </h5>
          </span>
          <div>
            {this.loopOverClasses(this.state.cardCharacter)}
          </div>
          <div>
            {this.capitalize(this.state.cardCharacter.alignment.law)} {this.capitalize(this.state.cardCharacter.alignment.evil)}
          </div>
          <div>

          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="row">
              <label>
                Campaign ID:
              </label>
              <div>
                <span className="red-text">
                  {errors.campaignId}
                </span>
              </div>
              <input
                className=""
                type="text"
                id="campaignId"
                name="campaignId"
                value={this.state.campaignId}
                onChange={this.onChange}
                error={errors.campaignId}
              />
            </div>
            <div>
              <span className="red-text">
                {errors.playerId}
              </span>
            </div>
            {inCampaign ?
              (<button
                className="waves-effect waves-light btn blue"
                name="selectedCharacter"
                id="leaveCampaign"
                type="submit"
                error={errors.playerId}
                value={{
                  characterId: this.state.cardCharacter._id,
                  playerId: this.state.cardCharacter.owner,
                  campaignId: this.state.campaignId
                }}
                onClick={(e) => {
                  if (window.confirm(
                    'Are you sure that you want to leave with this character?')) {
                      // Set the state of the card to have the selected character ID
                      this.handleClick(e);
                    }
                  }
                }>
                Leave Campaign
              </button>) :
              (<button
                className="waves-effect waves-light btn blue"
                name="selectedCharacter"
                id="joinCampaign"
                type="submit"
                error={errors.playerId}
                value={{
                  characterId: this.state.cardCharacter._id,
                  playerId: this.state.cardCharacter.owner,
                  campaignId: this.state.campaignId
                }}
                onClick={(e) => {
                  if (window.confirm(
                    'Are you sure that you want to join with this character?')) {
                      // Set the state of the card to have the selected character ID
                      this.handleClick(e);
                    }
                  }
                }>
                Join Campaign
              </button>)
            }
          </form>

          <div>
            <button
              className="waves-effect waves-light btn blue"
              name={this.state.cardCharacter.name}
              id="deletedCharacter"
              value={this.state.cardCharacter._id}
              onClick={(e) => {
                if (window.confirm('Are you sure you wish to delete this character?')) {
                  // Set the state of the card to have the character ID
                  this.handleClick(e);
                  // Delete the character
                  this.props.deleteCharacter(this.state.cardCharacter);
                }
              }
            }>
            Delete
          </button>
        </div>
      </div>
      {/* Expand content for the card */}
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          <h5>
            {this.state.cardCharacter.name}
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
              {this.state.cardCharacter.combat.speed}
            </p>
          </div>
          <div className="col s4 center-align">
            <h6>
              Armor Class
            </h6>
            <p>
              {this.state.cardCharacter.combat.ac}
            </p>
          </div>
          <div className="col s4 center-align">
            <h6>
              Initiative
            </h6>
            <p>
              {this.state.cardCharacter.combat.initiative}
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
              {this.state.cardCharacter.hitpoints.max}
            </p>
          </div>
          <div className="col s4 center-align">
            <h6>
              Current
            </h6>
            <p>
              {this.state.cardCharacter.hitpoints.current}
            </p>
          </div>
          <div className="col s4 center-align">
            <h6>
              Temporary
            </h6>
            <p>
              {this.state.cardCharacter.hitpoints.temp}
            </p>
          </div>
        </div>
        {/* inventory */}
        <div className="row center-align">
          <h5 style={{textDecoration: "underline"}}>Inventory</h5>
          <div className="row center-align">
            <h6>Currently Equipped Weapon</h6>
            {/* Currently equipped weapon */}
            {this.equippedWeapon(this.state.cardCharacter.inventory.weapons)}
          </div>
          <div className="row center-align">
            {/* Loop over the items in inventory */}
            {this.loopOverItems(this.state.cardCharacter.inventory.items)}
          </div>
        </div>
      </div>
    </div>
  );
}
}

Card.propTypes = {
  deleteCharacter: PropTypes.func.isRequired,
  joinCampaign: PropTypes.func.isRequired,
  leaveCampaign: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cardCharacter: state.cardCharacter
});

// Map all of the required actions to the connect export
const actions = { deleteCharacter, joinCampaign, leaveCampaign }

export default connect(
  mapStateToProps,
  actions
)(Card);
