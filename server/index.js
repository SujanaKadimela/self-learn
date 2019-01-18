const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const loginRoutes = require('./routes/login');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/simplelab');
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(Cors());

app.listen(3002, () => {
    console.log('listening on port 3002...');
});

app.get('/', (req, res) => {
    res.send('Welcome to login server');
});

app.post('/login', loginRoutes.login);
app.post('/signup', loginRoutes.signup);

db.once('open', function() {
    console.log('connection is opened');
})
db.on('error', () => {
    console.log('error in connection');
})