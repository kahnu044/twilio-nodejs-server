const express = require("express");
const app = express();
const PORT = 3003;

// Welcome route
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Welcome to Twilio nodeJs Server"
    })
})



// Server listing
app.listen(PORT, (req, res) => {
    console.log(`Twilio server running on http://localhost:${PORT}`)
})