import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
    data: null,
		classData: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
		this.callClassAPI()
      .then(res => this.setState({ classData: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. 
	//(Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api/greeting');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
	
	callClassAPI = async() => {
		const response = await fetch('/api/class');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message) 
		}
		return body;	
	};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DND Tracker</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
        <p className="App-intro">{this.state.classData}</p>
      </div>
    );
  }
}

export default App;

