// Validation of the character form for creation of new characters
const Validator = require('validator');
const isEmpty = require('is-empty');

// Only field that needs to be validated is the name field
module.exports = function validateCharacterDelete(data) {
  let errors = {};

  data.characterId = !isEmpty(data.characterId) ? data.characterId : '';

  // Check the character name against validators
  if (Validator.isEmpty(data.characterId)) {
    errors.characterId = 'Character must have an id';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
