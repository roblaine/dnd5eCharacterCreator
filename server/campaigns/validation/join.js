const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateCampaignJoin(data) {
  let errors = {};

  data.playerId = !isEmpty(data.playerId) ? data.playerId : '';
  data.characterId = !isEmpty(data.characterId) ? data.characterId : '';
  data.campaignId = !isEmpty(data.campaignId) ? data.campaignId : '';

  // Check the campaign to join name against validators
  if (Validator.isEmpty(data.playerId)) {
    errors.playerId = 'Player joining must be present';
  }
  if (Validator.isEmpty(data.characterId)) {
    errors.characterId = 'Campaign to join must have an id';
  }
  if (Validator.isEmpty(data.campaignId)) {
    errors.campaignId = 'Campaign to join must have an id';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
