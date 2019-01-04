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
    console.log(`'Spell' mounted correctly.`);
    
  }

  render() {
    return(
      <div className="Spell">
        <ul className="Spell-details">
          <li className="Spell-detail">Fireball</li>
          <li className="Spell-detail">1</li>
          <li className="Spell-detail">Evocation</li>
          <li className="Spell-detail">Wizard</li>
          <li className="Spell-detail">Fiery Bolt cast by a powerful mage</li>
          <li className="Spell-detail">Non-Ritual</li>
          <li className="Spell-detail">60 Feet</li>
          <li className="Spell-detail">1d8</li>
        </ul>
      </div>
    );
  } 
}

export default Spell;

