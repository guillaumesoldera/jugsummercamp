const express = require('express');
const path = require('path');
const talks = require('./data/talks');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/talks', function(req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.json(talks)
    }
);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


module.exports = app;
