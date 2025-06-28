const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to receive data from React and forward to Flask
app.post('/api/predict', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in prediction');
    }
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
