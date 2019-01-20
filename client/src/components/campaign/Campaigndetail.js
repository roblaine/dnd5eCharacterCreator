import React, { Component } from "react";
import { connect } from "react-redux";

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCharacters: this.props.myCharacters,
      campaignInfo: this.props.campaignInfo
      // host: this.props.host.campaignInfo.host
    };

    this.characterSelector = this.characterSelector.bind(this);
  }

  characterSelector(myCharacters) {
    console.log(this.state.myCharacters);
    return(
      <select>

      </select>
    );
  }

  render() {
    const campaignInfo = this.state.campaignInfo;
    const name = campaignInfo.name;
    const playerCount = campaignInfo.players.length;
    return (
      <tr>
        <th>
          {name}
        </th>
        <th>
          {this.state.campaignInfo.host}
        </th>
        <th>
          {this.characterSelector(this.state.myCharacters)}
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

export default CampaignDetail;
