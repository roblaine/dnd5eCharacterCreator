const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateCampaignLeave(data) {
  let errors = {};

  data.playerId = !isEmpty(data.playerId) ? data.playerId : '';
  data.characterId = !isEmpty(data.characterId) ? data.characterId : '';
  data.campaignId = !isEmpty(data.campaignId) ? data.campaignId : '';

  // Check the campaign to join name against validators
  if (Validator.isEmpty(data.playerId)) {
    errors.playerId = 'Player leaving must have an id';
  }
  if (Validator.isEmpty(data.characterId)) {
    errors.characterId = 'Character leaving must have an id';
  }
  if (Validator.isEmpty(data.campaignId)) {
    errors.campaignId = 'Campaign to leave must have an id';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
