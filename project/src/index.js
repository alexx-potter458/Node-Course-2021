const express = require('express');
const bodyParser = require('body-parser');


const myFunFact = require('./controllers/facts');
const {greetingHandler} = require('./controllers/greetings');
const { port } = require('./config/express');
const authorizationMiddleware = require('./middlewares/authMiddleware');
const loginHandler = require('./controllers/login');

const app = express();

const getCountryById = () => {
    return 'Romania';
}

app.use(bodyParser.json())

app.use((req, res, next) => {
    req.country = getCountryById;
    console.log("Time: ", Date.now());
    next();
});

app.get('/', (req, res) => {
    res.send('Olla amigo');
});

app.get('/hello/:name?', authorizationMiddleware, greetingHandler);

app.get('/dailyfun', authorizationMiddleware, myFunFact);

app.post('/login', loginHandler);

app.listen(port, () => {
    console.log('Server goes brr on', port);
});