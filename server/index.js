const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const loginRoutes = require('./routes/login');

const app = express();

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