const express = require('express');
const path = require('path');
const talks = require('./data/talks');
const speakers = require('./data/speakers');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/talks', function(req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.json(talks)
    }
);

app.get('/api/speakers', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.json(speakers)
  }
);

app.get('/*', function (req, res) {
    if (process.env.MODE === 'PROD') {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    } else {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    }
});


module.exports = app;
