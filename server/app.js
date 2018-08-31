const express = require('express');
const path = require('path');
const talks = require('./data/talks');

const app = express();

if (process.env.MODE === 'PROD') {
    app.use(express.static(path.resolve(__dirname, '..', 'build')));
} else {
    app.use(express.static(path.join(__dirname, 'build')));
}

app.get('/api/talks', function(req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.json(talks)
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
