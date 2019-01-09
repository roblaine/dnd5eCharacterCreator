// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the name field
module.exports = function validateCharacterCreate(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.class = !isEmpty(data.class) ? data.class : '';
  data.race = !isEmpty(data.race) ? data.race : '';
  data.owner = !isEmpty(data.owner) ? data.owner : '';

  // data.attributes = !isEmpty(data.attributes) ? data.attributes : '';
  // data.skills = !isEmpty(data.skills) ? data.skills : '';
  // data.hitpoints = !isEmpty(data.hitpoints) ? data.hitpoints : '';
  // data.combat = !isEmpty(data.combat) ? data.combat : '';

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
  if (Validator.isEmpty(data.owner)) {
    errors.owner = 'Character must have an owner';
  }
  // if (Validator.isEmpty(data.attributes)) {
  //   errors.attributes = 'Character must have an attributes array';
  // }
  // if (Validator.isEmpty(data.skills)) {
  //   errors.skills = 'Character must have a skills array';
  // }
  // if (Validator.isEmpty(data.hitpoints)) {
  //   errors.hitpoints = 'Character must have a hitpoints array';
  // }
  // if (Validator.isEmpty(data.combat)) {
  //   errors.combat = 'Character must have a combat array';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
