const express = require('express');
const path = require('path');
const { retrieveTalks } = require('./data/talks');
const { retrieveSpeakers } = require('./data/speakers');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/talks', function(req, res) {
    retrieveTalks((error, data) => {
        res.setHeader('Content-Type', 'application/json')
        res.json(data)
    })
    }
);

app.get('/api/speakers', function(req, res) {
    retrieveSpeakers((error, data) => {
        res.setHeader('Content-Type', 'application/json')
        res.json(data)
    })
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
