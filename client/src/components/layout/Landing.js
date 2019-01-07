import React, { Component } from 'react';

class Landing extends Component {
  render() {
    // eslint-disable-next-line
    return (
      <div style={{ height: '75vh' }} className='container valign-wrapper'>
        <div className='row'>
          <div className='col s12 center-align'>
            <h4>
              <b>Login</b> or <b>Register</b> with the best{' '}
              <span style={{ fontFamily: 'monospace' }}>DND</span> character sheet tracker
            </h4>
            <p className='flow-text grey-text text-darken-1'>
              Keep trakc of characters, play with your friends, and create spell books
            </p>
            <br />
            <a
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px'
              }}
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'
            >
              Register
            </a>
            <a
              style={{
                marginLeft: '2rem',
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px'
              }}
              className='btn btn-large waves-effect white hoverable black-text'
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
