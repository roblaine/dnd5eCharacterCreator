import React, { Component } from "react";

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaignInfo: this.props.campaignInfo
    };
  }
  
  render() {
    const campaignInfo = this.state.campaignInfo;
    const name = campaignInfo.name;
    const playerCount = campaignInfo.players.length;
    return (
      <div className="row">
        <div className="col s4">
          {name}
        </div>
        <div className="col s4">
          {this.state.campaignInfo.host}
        </div>
        <div className="col s4">
          {playerCount}
        </div>
        <div className="col s4">
          {this.state.campaignInfo.timestamps.createdAt}
        </div>
      </div>
    );
  }
}

export default CampaignDetail;
