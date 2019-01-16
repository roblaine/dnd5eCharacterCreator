import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Log from "../../utils/log";
import { fetchPublicCampaigns } from "../../actions/campaignActions";

class Campaign extends Component {
  constructor(props) {
    super(props);

    // Class State
    this.state = {
      publicCampaigns: this.props.publicCampaigns
    };

    // Class Functions

  }

  // Lifecycle methods
  componentWillMount() {
    this.props.fetchPublicCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    Log.info(nextProps);
  }

  render () {
    // Load in all of the local variables

    return (
      <div>
        <div>Campaign View</div>
      </div>
    );
  }
}

Campaign.propTypes = {
  fetchPublicCampaigns: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  publicCampaigns: state.publicCampaigns
});

// Map all of the required actions to the connect export
const actions = { fetchPublicCampaigns }

export default connect(
  mapStateToProps,
  actions
)(Campaign);
