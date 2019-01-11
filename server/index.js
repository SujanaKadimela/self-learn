const express = require('express');

const app = express();

app.listen(3002, () => {
    console.log('listening on port 3002...');
});

app.get('/', (req, res) => {
    res.send('Hello Sujana');
});