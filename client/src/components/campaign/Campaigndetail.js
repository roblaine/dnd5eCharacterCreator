import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaignInfo: this.props.campaignInfo
      // host: this.props.host.campaignInfo.host
    };
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
