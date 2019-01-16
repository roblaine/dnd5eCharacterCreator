/* Created following the guide by Rishi Prasad at
https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
*/
// Login logic for the app
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateQueryInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.userId = !isEmpty(data.userId) ? data.userId : '';

  // Email checks
  if (Validator.isEmpty(data.userId)) {
    errors.userId = 'UserId is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
