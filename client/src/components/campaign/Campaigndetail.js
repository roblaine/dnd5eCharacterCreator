import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { joinCampaign, leaveCampaign } from "../../actions/campaignActions";

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters,
      campaignInfo: this.props.campaignInfo,
      chosenCharacter: '',
      inCampaign: this.props.inCampaign
      // host: this.props.host.campaignInfo.host
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.characterSelector = this.characterSelector.bind(this);
    this.characterInputs = this.characterInputs.bind(this);
  }

  onChange = e => {
    this.setState({
      chosenCharacter: e.target.value
    });
  }

  onSubmit = e => {
    // Join or leave the campaign based on the value in state
    e.preventDefault();
    var campaignData = {
      characterId: this.state.chosenCharacter._id,
      playerId: this.state.auth.user.id,
      campaignId: ''
    };

    if(this.props.campaign) {
      campaignData.campaignId = this.props.campaign._id;
    } else {
      campaignData.campaignId = this.state.campaignId;
    }

    this.props.inCampaign ?
      this.props.leaveCampaign(campaignData) :
      this.props.joinCampaign(campaignData);
  }

  characterInputs(characters) {
    return characters.map(character => (
      <option key={character._id} value={character._id}>{character.name}</option>
    ))
  }

  characterSelector(characters) {
    const inputs = this.characterInputs(characters);
    console.log(this.state.userEmail);
    return(
      <select
        className="browser-default"
        value={this.state.chosenCharacter}
        onChange={this.onChange}
        >
        {inputs}
      </select>
    );
  }

  render() {
    const campaignInfo = this.state.campaignInfo;
    const name = campaignInfo.name;
    const playerCount = campaignInfo.players.length;
    // Get only the array of characters
    const characters = this.state.characters.characters;

    return (
      <form noValidate onSubmit={this.onSubmit}>
        <tr>
          <th>
          <input type="text">
            {name}
            </input>
          </th>
          <th>
            {this.state.campaignInfo.host}
          </th>
          <th className="input-field">
            {this.characterSelector(characters)}
          </th>
          <th>
            {playerCount}
          </th>
          <th>
            {this.state.campaignInfo.timestamps.createdAt}
          </th>
        </tr>
      </form>
    );
  }
}

CampaignDetail.propTypes = {
  characters: PropTypes.object.isRequired,
  joinCampaign: PropTypes.func.isRequired,
  leaveCampaign: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  campaigns: state.campaigns,
  characters: state.characters
});

const actions = { joinCampaign, leaveCampaign };

export default connect(
  mapStateToProps,
  actions
)(CampaignDetail);
