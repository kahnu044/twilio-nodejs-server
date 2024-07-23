// callRoutes

const express = require('express');
const { makeCall, getCallLogs } = require('../controllers/callController');

const router = express.Router();

router.post("/make-call", makeCall);
router.get("/get-call-logs", getCallLogs);

module.exports = router;
