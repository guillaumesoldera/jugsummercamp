const express = require('express');
const path = require('path');
const { retrieveTalks } = require('./data/talks');
const { retrieveSpeakers } = require('./data/speakers');

const app = express();

if (process.env.MODE === 'PROD') {
    app.use(express.static(path.resolve(__dirname, '..', 'build')));
} else {
    app.use(express.static(path.join(__dirname, 'build')));
}

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
    if (process.env.MODE === 'prod') {
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});


module.exports = app;
