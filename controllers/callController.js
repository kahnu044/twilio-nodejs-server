// callController
// Official docs - https://www.twilio.com/docs/voice/api/call-resource

const twilioClient = require('../config/twilioConfig');

const makeCall = (req, res) => {

    try {

        const { to } = req.body;

        const from = process.env.TWILIO_FROM_PHONE;

        const phoneNumberPattern = /^\+\d{1,15}$/;

        if (!to || !phoneNumberPattern.test(to)) {
            return res.status(400).json({ success: 'error', message: 'Invalid to phone number' });
        }

        // docs for TwiML - https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml
        // Replace with your server's URL
        const url = process.env.TWILIO_TWIML_VOICE_URL;

        twilioClient.calls
            .create({ to, from, url })
            .then(call => {
                res.json({
                    success: true,
                    message: `Call initiated to : ${call.to}`,
                    callSid: call?.sid
                });
            })
            .catch(error => {
                res.status(500).json({
                    success: false,
                    message: `Failed to initiate call: ${error.message}`
                });
            });
    } catch (error) {
        return res.status(500).json({ success: false, message: error?.message, error: "Internal server error" });
    }
};

// docs - https://www.twilio.com/docs/voice/tutorials/how-to-retrieve-call-logs/node
// pagination - https://www.twilio.com/docs/usage/twilios-response#response-formats-list-paging-information
const getCallLogs = (req, res) => {
    try {

        let limit = 50

        if (req.query?.limit) {
            limit = parseInt(req.query?.limit);
        }

        twilioClient.calls.list({ limit: limit })
            .then(calls => {
                res.json({
                    success: true,
                    message: "Call logs fetched successfully",
                    data: calls
                });
            })
            .catch(error => {
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve call logs: ${error.message}`
                });
            });
    } catch (error) {
        return res.status(500).json({ success: false, message: error?.message, error: "Internal server error" });
    }
};


module.exports = {
    makeCall,
    getCallLogs
};
