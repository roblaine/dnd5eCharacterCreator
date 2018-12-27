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
		return body;	
	};

  render() {
		console.log(`Data: ${this.state.data}`)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DND Tracker</h1>
        </header>
        <p className="App-intro">{this.state.data.name} {this.state.data.age}</p>
      </div>
    );
  }
}

export default App;

