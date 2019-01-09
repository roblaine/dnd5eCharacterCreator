// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the name field
module.exports = function validateCharacterCreate(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Query must have a name';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
