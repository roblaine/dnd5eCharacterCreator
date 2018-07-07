import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor() {
      super();
      this.state = {}
      this.getBeing = this.getBeing.bind(this);
      this.getBeings = this.getBeings.bind(this);
  }


  componentDidMount () {
    this.getBeings()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  // get an array of all of our beings to render
  getBeings() {
    this.fetch(`/api/beings`)
      .then( beings => {
        if(beings.length){
          this.setState({beings: beings})
          this.getBeing(beings[0].id)
        } else {
          this.setState(beings: [])
        }
      }
    )
  }

  // Get a particular being from host:3001/api/being/:id
  getBeing(id) {
    this.fetch(`/api/being/${id}`)
    .then( being => this.setState({being: being}) )
  }

  render () {
      let {beings, being} = this.state
      return beings
        ? <Container text>
          <Header as='h2' icon textAlign='center' color='teal'>
            <Icon name='unordered list' circular />
            <Header.Content>
              List of Beings
            </Header.Content>
          </Header>
          <Divider hidden section />
          {beings && beings.length
            ? <Button.Group color='teal' fluid widths={beings.length}>
              {Object.keys(beings).map((key) => {
                return <Button active={being && being.id === beings[key].id} fluid key={key} onClick={() => this.getBeing(beings[key].id)}>
                  {beings[key].name}
                </Button>
              })}
            </Button.Group>
            : <Container textAlign='center'>No beings found.</Container>
          }
          <Divider section />

          {being &&
            <Container>
              <Header as='h2'>{being.name}</Header>
              {being.level && <p>{being.level}</p>}

            </Container>
          }

          </Container>
          : <Container text>
            <Dimmer active inverted>
              <Loader content='Loading' />
            </Dimmer>
          </Container>
      }
}


export default App;
