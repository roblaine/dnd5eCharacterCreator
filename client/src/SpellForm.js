import React, { Component } from 'react';
import './SpellForm.css';

class SpellForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log(`'SpellForm' mounted correctly.`);
    
  }

  render() {
    return(
      <div className="Spell-form">
        <form className="Spell-form-details" />
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <li className="Spell-form-detail"></li>
          <field className="Spell-form-detail"></li>
        </form>
      </div>
    );
  } 
}

export default SpellForm;

