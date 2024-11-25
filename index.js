const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// MongoDB Schema and Model
const entrySchema = new mongoose.Schema({
    name: String,
    status: { type: String, default: 'none' },
});
const Entry = mongoose.model('Entry', entrySchema);

// Routes
app.get('/entries', async (req, res) => {
    const entries = await Entry.find();
    res.json(entries);
});

app.post('/update', async (req, res) => {
    const { entries } = req.body;
    await Promise.all(
        entries.map(entry => Entry.findByIdAndUpdate(entry._id, { status: entry.status }))
    );
    res.status(200).send('Entries updated successfully.');
});

app.get('/:type(preview|live)', async (req, res) => {
    const entries = await Entry.find({ status: req.params.type });
    res.json(entries);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

