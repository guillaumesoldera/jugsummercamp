const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {retrieveTalks, retrieveTalkById} = require('./data/talks');
const {retrieveSpeakers} = require('./data/speakers');
const moment = require('moment');
const expressValidator = require('express-validator');
const compression = require('compression');
moment.locale('fr');
const app = express();

app.use(compression());
app.enable('trust proxy');
app.use(function (req, res, next) {
    if (req.secure) {
        next();
    } else {
        if (process.env.MODE === 'DEV') {
            next();
        } else {
            res.redirect('https://' + req.headers.host + req.url);
        }
    }
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/talks', function (req, res) {
        retrieveTalks().then(data => {
            res.setHeader('Content-Type', 'application/json');
            res.json(data)
        })
    }
);

app.get('/api/speakers', function (req, res) {
        retrieveSpeakers().then(data => {
            res.setHeader('Content-Type', 'application/json');
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
