import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
		console.log(`Login mounted correctly.`);
  }


  render() {
    return (
    		<form action="/users/new" method="POST">
					<label>
						Sign Up 
					</label>
					<input type="text" placeholder="username" name="username" />
					<input type="text" placeholder="password" name="password" />
					<input type="submit" value="Submit" />
				</form>
    )
  }
}

export default Login;

