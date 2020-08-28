// import styled from 'styled-components';
// import styles from '../styles/Home.module.css';
// import Button from '../components/Button';
// import Footer from '../components/Footer';
// import Signup from '../components/Signup';
// import Login from '../components/Login';

import SignupPage from './signup';
import Dashboard from './dashboard';
import loggedIn from '../lib/loggedIn';

class Home extends React.Component {
  render() {
    let activeUser = loggedIn();
    console.log(activeUser);
    if (!activeUser) {
      return <SignupPage />;
    } else {
      return <Dashboard />;
    }
  }
}

export default Home;
