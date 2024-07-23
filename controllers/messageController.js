//messageController
const twilioClient = require('../config/twilioConfig');

const sendMessage = (req, res) => {

    try {

        const { to, from, body } = req.body;

        twilioClient.messages
            .create({ to, from, body })
            .then(message => {
                res.json({
                    success: true,
                    message: `Message sent with SID ${message.sid}`
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