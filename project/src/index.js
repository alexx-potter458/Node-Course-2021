const express = require('express');
const myFunFact = require('./facts');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olla amigo');

})

app.get('/hello/:name?', (req, res) => {
    if(!req.params.name) {
        res.send("Hello amgios");
    } else {
        let message = 'Hello ' + req.params.name;
        res.send(message);
    }  
})

app.get('/dailyfun', myFunFact);

app.listen(port, () => {
    console.log('Server goes brr on', port);
})