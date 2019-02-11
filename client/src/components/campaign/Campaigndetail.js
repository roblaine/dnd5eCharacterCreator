import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters,
      campaignInfo: this.props.campaignInfo,
      chosenCharacter: ''
      // host: this.props.host.campaignInfo.host
    };

    this.onChange = this.onChange.bind(this);
    this.characterSelector = this.characterSelector.bind(this);
    this.characterInputs = this.characterInputs.bind(this);
  }

  onChange = e => {
    this.setState({
      chosenCharacter: e.target.value
    });
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
      <tr>
        <th>
          {name}
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
    );
  }
}

CampaignDetail.propTypes = {
  characters: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  characters: state.characters
});

const actions = null; // { joinCampaign };

export default connect(
  mapStateToProps,
  actions
)(CampaignDetail);
