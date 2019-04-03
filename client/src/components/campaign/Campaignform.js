import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Log from "../../utils/log";

class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inCampaign: false,
      campaignId: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    var campaignData = {
      characterId: this.state.cardCharacter._id,
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

  render() {
    <form noValidate onSubmit={this.onSubmit}>

      <div className='col s12' style={{ paddingLeft: '11.250px' }}>
        <button
          style={{
            width: '150px',
            borderRadius: '3px',
            letterSpacing: '1.5px',
            marginTop: '1rem'
          }}
          type='submit'
          className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
            Join Campaign
        </button>
      </div>
    </form>
  }
}

CampaignForm.propTypes = {
  joinCampaign: PropTypes.func.isRequired,
  leaveCampaign: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Map all of the required actions to the connect export
const actions = { joinCampaign, leaveCampaign }

export default connect(
  mapStateToProps,
  actions
)(CampaignForm);
