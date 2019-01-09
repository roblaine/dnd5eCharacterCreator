import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacter } from '../../actions/characterActions';

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      name: '',
      race: '',
      class: '',
      law: '',
      evil: '',
      auth: this.props.auth
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const characterData = {
      email: this.state.auth.user.email,
      name: this.state.name,
      race: this.state.race,
      classes: [
        {
          name: this.state.class
        }
      ],
      attributes: [
        {
          name: "strength"
        }
      ],
      skills: [
        {
          name: "acrobatics"
        }
      ]
      // alignment: {
      //   law: this.state.law,
      //   evil: this.state.evil
      // }
    };

    this.props.addCharacter(characterData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container center-align">
        <h1>Add Character</h1>
        <form noValidate onSubmit={this.onSubmit}>
          {/* Character name */}
          <div className="input-field">
            <label htmlFor="name">Name: </label>
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
