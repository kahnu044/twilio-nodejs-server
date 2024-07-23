//messageController
const twilioClient = require('../config/twilioConfig');

const sendMessage = (req, res) => {

    try {

        const { to, from, body } = req.body;

        const phoneNumberPattern = /^\+\d{1,15}$/;

        if (!to || !phoneNumberPattern.test(to)) {
            return res.status(400).json({ success: 'error', message: 'Invalid to phone number' });
        }

        if (!from || !phoneNumberPattern.test(from)) {
            return res.status(400).json({ success: false, message: 'Invalid from phone number' });
        }

        if (!body || typeof body !== 'string' || body.trim() === '') {
            return res.status(400).json({ success: false, message: 'Message body is required' });
        }

        twilioClient.messages
            .create({ to, from, body })
            .then(message => {
                res.json({
                    success: true,
                    message: `Successfully message sent to :  ${message?.to}`,
                    messageSid: message?.sid,
                    createdAt: message?.dateCreated,
                    updatedAt: message?.dateUpdated
                });
            })
            .catch(error => {
                res.status(500).json({
                    success: false,
                    message: `Failed to send message: ${error.message}`
                });
            });
    } catch (error) {
        return res.status(500).json({ success: false, message: error?.message, error: "Internal server error" });

    }

};

module.exports = {
    sendMessage
};