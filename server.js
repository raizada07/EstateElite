// server.js (Basic Express Setup)

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Sample Route
app.get('/', (req, res) => {
    res.send('Welcome to EstateElite Backend! 🚀');
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Next step: User & Property models, routes, and authentication! Let me know! 🛠️
