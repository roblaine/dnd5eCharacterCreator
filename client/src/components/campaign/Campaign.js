import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Log from "../../utils/log";
import CampaignDetail from "./Campaigndetail";
import { fetchPublicCampaigns } from "../../actions/campaignActions";

class Campaign extends Component {
  constructor(props) {
    super(props);

    // Class State
    this.state = {
      myCharacters: this.props.myCharacters,
      publicCampaigns: []
    };

    // Class Functions
    this.loopOverCampaigns = this.loopOverCampaigns.bind(this);
  }

  // Lifecycle methods
  componentWillMount() {
    Log.trace("Mounting Campaign and fetching public campaigns");
    this.props.fetchPublicCampaigns();
  }

  loopOverCampaigns(campaigns) {
    return campaigns.map(campaign => (
      campaign ? (
        <CampaignDetail campaignInfo={campaign} myCharacters={this.state.myCharacters} key={campaign._id} />
      ) : (
        null
      )
    ));
  }

  render () {
    // Load in all of the local variables
    const campaignDetailRows = this.loopOverCampaigns(this.props.campaigns.publicCampaigns);

    Log.trace("Rendering campaign view");
    return (
      <div>
        <div>Campaign View</div>
        <table>
          <thead>
          <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Join</th>
              <th>Player Count</th>
              <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {campaignDetailRows}
        </tbody>
        </table>
      </div>
    );
  }
}

Campaign.propTypes = {
  fetchPublicCampaigns: PropTypes.func.isRequired,
  campaigns: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaigns: state.campaigns
});

// Map all of the required actions to the connect export
const actions = { fetchPublicCampaigns }

export default connect(
  mapStateToProps,
  actions
)(Campaign);
