// Required imports
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Set port and API endpoint
const PORT = process.env.PORT || 5000;
const API_ENDPOINT = "/api/v1/data";

// Import data from a helper function
const data = require('./utils/db-helper').Db;

// Initialize express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// Define routes
app.get(API_ENDPOINT, async (req, res) => res.json(data));

app.get('*', (req, res) => {
    const name = req.params.name;
    res.send(
        `
        <h1>
            Tenant Talk
        </h1>
        <p>
            Hello,${name ? `${name}!` : 'World!' } <br />
            Welcome to the Tenant Talk API.
        </p>
        <p>
            Dummy data available at <a href="http://localhost:${PORT}/api/v1/data">http://localhost:${PORT}/api/v1/data</a>
        </p>
        `
    )
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Dummy data is available at http://localhost:${PORT}${API_ENDPOINT}`); // eslint-disable-line no-console
});

// Export the app
module.exports = app;
