//MODULES
const express = require('express');
const app = express();
const routes = require('./routes');

//____________CONFIG______________
const PORT = process.env.PORT || 8000;

// PARSE INCOMING DATA AS JSON
app.use(express.json({ limit: '1mb' }));

// ROUTES
app.use('/', routes);


// LISTEN ON PORT
app.listen(PORT, () => console.log(`Server is ON. Access http://localhost:${PORT}`))