const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateSessionCreate(data) {
  let errors = {};

  data.host = !isEmpty(data.host) ? data.host : '';
  data.name = !isEmpty(data.name) ? data.name : '';

  // Check the character name against validators
  if (Validator.isEmpty(data.host)) {
    errors.host = 'Session must have a host';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Session must have a unique name';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
