// twilioConfig.js
const twilio = require('twilio');

const accountSid = 'TWILIO_ACCOUNT_SID';
const authToken = 'TWILIO_ACCOUNT_AUTH_TOKEN';

const client = twilio(accountSid, authToken);

module.exports = client;
