import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacter } from '../../actions/characterActions';

class CharacterForm extends Component {
  constructor(props) {
    super(props);

    // Create class arrays for attributes
    this.atttributeList = [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma"
    ];

    this.attributeProfList = [
      "Strength Prof",
      "Dexterity Prof",
      "Constitution Prof",
      "Intelligence Prof",
      "Wisdom Prof",
      "Charisma Prof"
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
      strengthProf: false,
      dexterity: '',
      dexterityProf: false,
      constitution: '',
      constitutionProf: false,
      intelligence: '',
      intelligenceProf: false,
      wisdom: '',
      wisdomProf: false,
      charisma: '',
      charismaProf: false,

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
    this.loopAttributeProfs = this.loopAttributeProfs.bind(this);
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

    // Attributes
    const attributes = [
      {
        name: 'strength',
        level: this.state.strength
      },
      {
        name: 'dexterity',
        level: this.state.dexterity
      },
      {
        name: 'constitution',
        level: this.state.constitution
      },
      {
        name: 'intelligence',
        level: this.state.intelligence
      },
      {
        name: 'wisdom',
        level: this.state.wisdom
      },
      {
        name: 'charisma',
        level: this.state.charisma
      }
    ]

    // Skills
    const skills = [
      {
        name: 'acrobatics',
        level: this.state.acrobatics
      },
      {
        name: 'animalhandling',
        level: this.state.animalhandling
      },
      {
        name: 'arcana',
        level: this.state.arcana
      },
      {
        name: 'athletics',
        level: this.state.athletics
      },
      {
        name: 'deception',
        level: this.state.deception
      },
      {
        name: 'history',
        level: this.state.history
      },
      {
        name: 'insight',
        level: this.state.insight
      },
      {
        name: 'intimidation',
        level: this.state.intimidation
      },
      {
        name: 'investigation',
        level: this.state.investigation
      },
      {
        name: 'medicine',
        level: this.state.medicine
      },
      {
        name: 'nature',
        level: this.state.nature
      },
      {
        name: 'perception',
        level: this.state.perception
      },
      {
        name: 'performance',
        level: this.state.performance
      },
      {
        name: 'persuasion',
        level: this.state.persuasion
      },
      {
        name: 'religion',
        level: this.state.religion
      },
      {
        name: 'sleightofhand',
        level: this.state.sleightofhand
      },
      {
        name: 'stealth',
        level: this.state.stealth
      },
      {
        name: 'survival',
        level: this.state.survival
      }
    ]

    const characterData = {
      email: this.state.auth.user.email,
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      law: this.state.law,
      evil: this.state.evil,
      combat: {
        ac: this.state.ac,
      },
      attributes: attributes,
      skills: skills
    };

    this.props.addCharacter(characterData);
  }

  loopAttributeProfs(attributeProfList = this.attributeProfList) {
    return attributeProfList.map((prof, index) => (
      <div className="row" key={index}>
        <p>
          <label>
            <input
              type="checkbox"
              name={prof}
              id={prof}
              onChange={this.onChange}
              checked={this.state.prof}
            />
            <span>{prof}</span>
          </label>
        </p>
      </div>
    ));
  }

  loopAttributes(atttributeList = this.atttributeList) {
    return atttributeList.map((attribute, index) => (
      <div className="row" key={index}>
        <p>
          <label>
            <span>
              <input
                type="number"
                name={attribute}
                onChange={this.onChange}
                value={this.state.attribute}
                min="1"
                max="30"
              />
              {attribute}
            </span>
          </label>
        </p>
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
    const attrProfItems = this.loopAttributeProfs();

    return (
      <div className="center-align">
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
              error={errors.race}>
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
          <div className="stats">
            {/* Desktop with 3 cols */}
            <div className="row show-on-large hide-on-med-and-down">
              <div className="left-align col s4">
                {attrProfItems}
              </div>
              {/* Column for starting attributes */}
              <div className="col s4">
                {attributeItems}
              </div>
              {/* Column for starting skills */}
              <div className="left-align col s4">
                {skillItems}
              </div>
              <button className="waves-effect waves-light btn blue" type="submit">Create!
              </button>
            </div>

            {/* Mobile and tablet */}
            <div className="center-align stats col hide-on-large-only show-on-medium-and-down">
              <div className="left-align">
                {attrProfItems}
              </div>
              {/* Column for starting attributes */}
              <div className="left-align">
                {attributeItems}
              </div>
              {/* Column for starting skills */}
              <div className="left-align">
                {skillItems}
              </div>
              <button className="waves-effect waves-light btn blue" type="submit">Create!
              </button>
            </div>

          </div>
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
