// callController
const twilioClient = require('../config/twilioConfig');

const makeCall = (req, res) => {
    const { to, from } = req.body;

    // Replace with your server's URL
    const url = 'http://demo.twilio.com/docs/voice.xml';

    twilioClient.calls
        .create({ to, from, url })
        .then(call => {
            res.json({
                success: true,
                message: `Call initiated with SID ${call.sid}`
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: `Failed to initiate call: ${error.message}`
            });
        });
};

module.exports = {
    makeCall
};
