// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the email
module.exports = function validateCharacterQuery(data) {
  let errors = {};

  data.owner = !isEmpty(data.owner) ? data.owner : '';

  if (Validator.isEmpty(data.owner)) {
    errors.owner = 'Character must have an  owner';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
