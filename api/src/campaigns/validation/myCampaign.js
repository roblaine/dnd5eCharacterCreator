const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateCampaignMyCampaign(data) {
  let errors = {};

  data.playerId = !isEmpty(data.playerId) ? data.playerId : '';
  data.characterId = !isEmpty(data.characterId) ? data.characterId : '';

  // Check the campaign to join name against validators
  if (Validator.isEmpty(data.playerId)) {
    errors.playerId = 'Player querying must be present';
  }
  if (Validator.isEmpty(data.characterId)) {
    errors.characterId = 'Character to query must have an id';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
