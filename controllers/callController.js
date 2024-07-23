// callController
const twilioClient = require('../config/twilioConfig');

const makeCall = (req, res) => {

    try {

        const { to, from } = req.body;

        const phoneNumberPattern = /^\+\d{1,15}$/;

        if (!to || !phoneNumberPattern.test(to)) {
            return res.status(400).json({ success: 'error', message: 'Invalid to phone number' });
        }

        if (!from || !phoneNumberPattern.test(from)) {
            return res.status(400).json({ success: false, message: 'Invalid from phone number' });
        }

        // Replace with your server's URL
        // docs for TwiML - https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml
        const url = 'http://demo.twilio.com/docs/voice.xml';

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
const getCallLogs = (req, res) => {
    try {

        twilioClient.calls.list({ limit: 20 }) // Adjust the limit as needed
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
