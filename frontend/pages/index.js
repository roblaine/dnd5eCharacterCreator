import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const LoginDiv = styled.div`
  font-size: 0.7em;
`;

const FormContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 0.7em;

  a,
  #submit-button {
    background-color: white;
  }
`;

class Home extends React.Component {
  // const showLogin = () => {
  //   console.log('Clicked me');
  //   this.setState({
  //     showSignup: false,
  //   });
  // };

  constructor(props) {
    super(props);
    this.state = { showSignup: false };

    // This binding is necessary to make `this` work in the callback    this.handleClick = this.handleClick.bind(this);  }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({ showSignup: !state.showSignup }));
  }

  render() {
    return (
      <div className={styles.container}>
        <CustomHead />

        <main className={styles.main}>
          <FormContainer>
            {this.state.showSignup ? <h1>Register</h1> : <h1>Login</h1>}
            {this.state.showSignup ? (
              // If showSignup is true, display the register component, else show the login one
              <>
                <LoginDiv>
                  <p>
                    Already have an account?
                    <Button
                      onClick={this.handleClick}
                      key="loginButton"
                      path="/"
                      text="Login"
                      // onClick={}
                    />
                  </p>
                </LoginDiv>
                <RegisterForm />
              </>
            ) : (
              <>
                <LoginDiv>
                  <p>
                    Need an account?
                    <Button
                      onClick={this.handleClick}
                      key="registerButton"
                      path="/"
                      text="Sign Up"
                    />
                  </p>
                </LoginDiv>
                <LoginForm />
              </>
            )}
          </FormContainer>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
