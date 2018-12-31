import React, { Component } from 'react';
import './CharacterSheet.css';

class CharacterSheet extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
		console.log(`'CharacterSheet' mounted correctly.`);
  }

  render() {
    return (
      <div className="CharacterSheet">
				<div className="Meta-details">
					<p>Name</p>
					<p>Age</p>
					<p>Race</p>
					<p>Level</p>
					<p>Class</p>
				</div>
				<div className="Skill-list">
					<p>[] | Skill 1 | 11 | +1</p>
					<p>[] | Skill 2 | 13 | +2</p>
					<p>[] | Skill 2 | 12 | +1</p>
				</div>
			</div>
    );
  }
}

export default CharacterSheet;

