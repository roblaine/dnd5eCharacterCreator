const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateCampaignCreate(data) {
  let errors = {};

  data.host = !isEmpty(data.host) ? data.host : '';
  data.name = !isEmpty(data.name) ? data.name : '';

  // Check the campaign against validators
  if (Validator.isEmpty(data.host)) {
    errors.host = 'Campaign must have a host';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Campaign must have a unique name';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
