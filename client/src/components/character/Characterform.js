import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacter } from '../../actions/characterActions';

class CharacterForm extends Component {
  constructor(props) {
    super(props);

    this.atttributeList = [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma"
    ];
    // Declare all of the skills
    this.skillList = [
      "Acrobatics",
      "Animal Handling",
      "Arcana",
      "Athletics",
      "Deception",
      "History",
      "Insight",
      "Intimidation",
      "Investigation",
      "Medicine",
      "Nature",
      "Perception",
      "Performance",
      "Persuasion",
      "Religion",
      "Sleight of Hand",
      "Stealth",
      "Survival"
    ];

    this.state = {
      errors: {},
      auth: this.props.auth,

      name: '',
      race: '',
      class: '',
      law: '',
      evil: '',
      ac: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',

      acrobatics: false,
      animalhandling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleightofhand: false,
      stealth: false,
      survival: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loopSkills = this.loopSkills.bind(this);
    this.loopAttributes = this.loopAttributes.bind(this);
  }

  componentWillMount() {
    document.title = "Create Character";
  }

  componentWillUnmount() {
    document.title = "DND Tracker";
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.characters.isCreated) {
      this.props.history.push('/dashboard');
      // Redirect to the dashboard on success
    }
    // Load errors if they exist into props
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    // Check target for checbox before assigning value
    const target = e.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;

    // Remove any spaces and lowercase the names
    const name = target.name.toLowerCase().replace(/\s/g, '');
    this.setState({ [name]: value });
  }

  onSubmit = e => {
    e.preventDefault();

    const characterData = {
      email: this.state.auth.user.email,
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      law: this.state.law,
      evil: this.state.evil,
      ac: this.state.ac,
      // Attributes
      strength: this.state.strength,
      // Skills
      acrobatics: this.state.acrobatics
    };

    this.props.addCharacter(characterData);
  }

  loopAttributes(atttributeList = this.atttributeList) {
    return atttributeList.map((attribute, index)=> (
      <div className="row" key={index}>
          <p><label>
            <input
              className="input"
              type="checkbox"
              name={attribute}
              id={attribute}
              onChange={this.onChange}
              checked={this.state.strengthProf}
            />
          <span>
            <input
              type="number"
              name={attribute}
              onChange={this.onChange}
              value={this.state.attribute}
            />
            {attribute}
          </span>
        </label></p>
      </div>
    ));
  }

  loopSkills(skillList = this.skillList) {
    return skillList.map((skill, index) => (
        <p key={index}>
          <label>
            <input
              type="checkbox"
              name={skill}
              id={skill}
              onChange={this.onChange}
              checked={this.state.skill}
            />
            <span>{skill}</span>
          </label>
        </p>
    ));
  }


  render() {
    const { errors } = this.state;

    // Programatically generate the columns
    const skillItems = this.loopSkills();
    const attributeItems = this.loopAttributes();

    return (
      <div className="container center-align">
        <h1>Create Character</h1>
        <form noValidate onSubmit={this.onSubmit}>
          {/* Character name */}
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <span className='red-text'>
              {errors.name}
            </span>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
            />
          </div>

          <div className="container" id="race-class">
            {/* Race select */}
            <label htmlFor="race">Race</label>
            <span className='red-text'>
              {errors.race}
            </span>
            <select className="browser-default"
              name="race"
              id="race"
              onChange={this.onChange}
              value={this.state.value}
              error={errors.race}
              >
              <option defaultValue value="">Race</option>
              <option value="dragonborn">Dragonborn</option>
              <option value="dwarf">Dwarf</option>
              <option value="elf">Elf</option>
              <option value="gnome">Gnome</option>
              <option value="half-elf">Half Elf</option>
              <option value="half-orc">Half Orc</option>
              <option value="halfling">Halfling</option>
              <option value="humn">Human</option>
              <option value="tiefling">Tiefling</option>
            </select>

            {/* Class select */}
            <label htmlFor="class">Class</label>
            <span className='red-text'>
              {errors.class}
            </span>
            <select className="browser-default"
              name="class"
              id="class"
              onChange={this.onChange}
              value={this.state.value}
              error={errors.class}>
              <option defaultValue value="">Class</option>
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>

          <div className="container" id="alignment-background">
            {/* Alignment select */}
            <label htmlFor="law">Lawfulness</label>
            <span className='red-text'>
              {errors.law}
            </span>
            <select className="browser-default"
              name="law"
              id="law"
              onChange={this.onChange}
              value={this.state.value}
              error={errors.law}>
              <option defaultValue value="">Lawfulness</option>
              <option value="lawful">Lawful</option>
              <option value="nuetral">Neutral</option>
              <option value="chaos">Chaos</option>
            </select>

            <label htmlFor="law">Morality</label>
            <span className='red-text'>
              {errors.evil}
            </span>
            <select className="browser-default"
              name="evil"
              id="evil"
              onChange={this.onChange}
              value={this.state.value}
              error={errors.evil}>
              <option defaultValue value="">Morality</option>
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="evil">Evil</option>
            </select>
            {/* Starting ac */}
            <div className="input-field">
              <label htmlFor="ac">Starting AC</label>
              <span className='red-text'>
                {errors.ac}
              </span>
              <input
                type="number"
                name="ac"
                id="ac"
                onChange={this.onChange}
                value={this.state.ac}
              />
            </div>
          </div>

          {/* Set the starting stats */}
          <div className="stats row">
            {/* Column for starting attributes */}
            <div className="col s6">
              {attributeItems}
            </div>
            {/* Column for starting skills */}
            <div className="left-align col s6">
              {skillItems}
            </div>

          </div>

          <button className="waves-effect waves-light btn blue" type="submit">Create!
          </button>
        </form>
      </div>
    );
  }
}

CharacterForm.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addCharacter }
)(CharacterForm);
