const express = require("express");
const PORT = 3003;

const app = express();
app.use(express.json());

const messageRoutes = require('./routes/messageRoutes');

// Welcome route
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Welcome to Twilio nodeJs Server"
    })
})

app.use('/api', messageRoutes);


// Server listing
app.listen(PORT, (req, res) => {
    console.log(`Twilio server running on http://localhost:${PORT}`)
})