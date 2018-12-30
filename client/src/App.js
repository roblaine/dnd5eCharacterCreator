import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
		console.log(`Component mounted correctly.`);
    // Call our fetch function below once the component mounts
		this.callClassAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. 
	//(Note the route we are fetching matches the GET route from server.js
	callClassAPI = async() => {
		const response = await fetch('/api/classData');
		const body = await response.json();
		
		if (response.status !== 200 && response.status !== 304) {
			throw Error(body.message) 
		}
		console.log(`Retrieved data: ${body}`);
		return body;	
	};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DND Tracker</h1>
        </header>

    		<form action="/users/new" method="POST">
					<label>
						Sign Up 
					</label>
					<input type="text" placeholder="username" name="username" />
					<input type="text" placeholder="password" name="password" />
					<input type="submit" value="Submit" />
				</form>
			</div>
    );
  }
}

export default App;

