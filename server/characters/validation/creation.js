// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the name field
module.exports = function validateCreationInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';

  data.class = !isEmpty(data.class) ? data.class : '';

  data.owner = !isEmpty(data.owner) ? data.owner : '';


  // Check the character name against validators
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Character must have a name';
  }

  if (Validator.isEmpty(data.class)) {
    errors.class = 'Character must have a class';
  }

  if (Validator.isEmpty(data.owner)) {
    errors.owner = 'Character must have an  owner';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
