import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  // render different links, ie logout link if user is logged in
  render() {
    let loggedIn = this.props.auth.isAuthenticated;

    return (
      <div className='navbar-fixed'>
        <nav className='z-depth-10'>
          <div className='nav-wrapper white'>
            <Link
              to='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='col s5 brand-logo center black-text'
              >
                <i className='material-icons'>healing</i>
                DND Tracker
              </Link>
              {loggedIn ? (
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <button
                    style={{
                      width: '150px',
                      borderRadius: '3px',
                      letterSpacing: '1.5px',
                      marginRight: '10px'
                    }}
                    onClick={this.onLogoutClick}
                    class="waves-effect waves-light btn hoverable blue">
                    Logout
                  </button>
                </ul>
              ) : ("")}
            </div>
          </nav>
        </div>
      );
    }
  }

  Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);
