import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Log from "../../utils/log";

class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {

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
      <div className='input-field col s12'>
        <input
          onChange={this.onChange}
          value={this.state.name}
          error={errors.name}
          id='name'
          type='text'
          className={classnames('', {
            invalid: errors.name
          })}
        />
        <label htmlFor='name'>Name</label>
        <span className='red-text'>{errors.name}</span>
      </div>
      <div className='input-field col s12'>
        <input
          onChange={this.onChange}
          value={this.state.email}
          error={errors.email}
          id='email'
          type='email'
          className={classnames('', {
            invalid: errors.email
          })}

        />
        <span className='red-text'>{errors.email}</span>
        <label htmlFor='email'>Email</label>
      </div>
      <div className='input-field col s12'>
        <input
          onChange={this.onChange}
          value={this.state.password}
          error={errors.password}
          id='password'
          type='password'
          className={classnames('', {
            invalid: errors.password
          })}
        />
        <label htmlFor='password'>Password</label>
        <span className='red-text'>{errors.password}</span>
      </div>
      <div className='input-field col s12'>
        <input
          onChange={this.onChange}
          value={this.state.password2}
          error={errors.password2}
          id='password2'
          type='password'
          className={classnames('', {
            invalid: errors.password2
          })}
        />
        <label htmlFor='password2'>Confirm Password</label>
        <span className='red-text'>{errors.password2}</span>
      </div>
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
            Sign up
        </button>
      </div>
    </form>
  }
}

// Card.propTypes = {
//   deleteCharacter: PropTypes.func.isRequired,
//   joinCampaign: PropTypes.func.isRequired,
//   leaveCampaign: PropTypes.func.isRequired,
//   queryMyCampaign: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors,
//   cardCharacter: state.cardCharacter
// });
//
// // Map all of the required actions to the connect export
// const actions = { deleteCharacter, joinCampaign, leaveCampaign, queryMyCampaign }
//
// export default connect(
//   mapStateToProps,
//   actions
// )(Card);

export default CampaignForm;
