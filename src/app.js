const express = require('express');
const cors = require('cors');
const usersRoute = require('./routes/users');
const notesRoute = require('./routes/notes');

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', usersRoute);
app.use('/api/notes', notesRoute);

module.exports = app;
