import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Character from "../character/Character";
import Campaign from "../campaign/Campaign";
import Log from "../../utils/log";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Mount or dismount the campaign Component based on boolean value
      showCampaignFinder: false
    };

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleClick = e => {
    // This will be called on a button press to render the campaign Component
    // Get the target and name
    const target = e.target;
    const name = target.name;
    // Set value to the opposite of this.state.showCampaignFinder;
    const value = !this.state[name];
    Log.info("handleClick in the Dashboard:");
    Log.info(name);
    Log.info(value);
    // Set the value of the state attribute showCampaignFinder
    this.setState({ [name]: value });
  };

  render() {
    const showCampaignFinder = this.state.showCampaignFinder;
    const campaignFinder = showCampaignFinder ?
      (
        <div id="campaignFinder">
          <Campaign />
        </div>
      ) : (
        null
      );

    return (
      <div style={{width: "85%"}} className="container center-align">
        {campaignFinder}
        {/* Toggle button to show or hide the campaignFinder */}
        <button
          style={{ marginTop: "20px", marginBottom: "20px" }}
          className="waves-effect waves-light btn blue"
          type="submit"
          id="toggle"
          value={this.state.showCampaignFinder}
          name="showCampaignFinder"
          onClick={this.handleClick}>
          {this.state.showCampaignFinder ?
            'Hide Campaign Finder' :
            'Show Campaign Finder'
          }
        </button>

        <Character />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(Dashboard);
