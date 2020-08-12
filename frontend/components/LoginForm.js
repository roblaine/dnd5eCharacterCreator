import styled from 'styled-components';
import { gql } from 'graphql-tag';

const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;

  input {
    flex-grow: 1;
    margin: 0.2em 0 0.2em 0;
  }
`;

class LoginForm extends React.Component {
  render() {
    return (
      <StyledForm action="/" method="POST">
        <input key="email" type="text" placeholder="Email" />
        <input key="pass" type="password" placeholder="Password" />

        <input
          key="sibmit-button"
          id="submit-button"
          type="submit"
          value="Login"
        />
      </StyledForm>
    );
  }
}

export default LoginForm;
