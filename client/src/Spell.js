import React, { Component } from 'react';
import './Spell.css';

class Spell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log(`\'Spell\' mounted correctly.`);
  }

  render() {
    return(
      <div className="Spell">
        <li className="Spell-details">
        </li>
      </div>
    );
  }
  
}

export default Spell;

