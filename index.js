//MODULES
const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

//____________CONFIG______________
const PORT = process.env.PORT || 8000;

// CORS enable for all origins
app.use(cors());

// CORS CONFIG FOR A UNIQUE ORIGIN
//  const corsOptions = {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// };
//
//app.use(cors(corsOptions));

// PARSE INCOMING DATA AS JSON
app.use(express.json({ limit: '1mb' }));

// ROUTES
app.use('/', routes);


// LISTEN ON PORT
app.listen(PORT, () => console.log(`Server is ON. Access http://localhost:${PORT}`))