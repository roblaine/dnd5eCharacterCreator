// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the name field
module.exports = function validateCharacterCreate(data) {
  let errors = {};

  data.owner = !isEmpty(data.owner) ? data.owner : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.class = !isEmpty(data.class) ? data.class : '';
  data.race = !isEmpty(data.race) ? data.race : '';
  data.law = !isEmpty(data.law) ? data.law : '';
  data.evil = !isEmpty(data.evil) ? data.evil : '';
  data.ac = !isEmpty(data.ac) ? data.ac : '';

  // data.attributes = !isEmpty(data.attributes) ? data.attributes : '';
  // data.skills = !isEmpty(data.skills) ? data.skills : '';
  // data.hitpoints = !isEmpty(data.hitpoints) ? data.hitpoints : '';

  // Check the character name against validators
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Character must have a name';
  }
  if (Validator.isEmpty(data.class)) {
    errors.class = 'Character must have a class';
  }
  if (Validator.isEmpty(data.race)) {
    errors.race = 'Character must have a race';
  }
  if (Validator.isEmpty(data.law)) {
    errors.law = 'Character must have law alignment';
  }
  if (Validator.isEmpty(data.evil)) {
    errors.evil = 'Character must have a morality alignment';
  }
  if (Validator.isEmpty(data.ac)) {
    errors.ac = 'Character must have a starting AC value';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
