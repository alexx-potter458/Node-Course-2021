const express = require('express');
const { port } = require('./config/express');
const schema = require('./graphql');
const { graphqlHTTP } = require('express-graphql');
const authorizationMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(
    '/graphql', authorizationMiddleware, graphqlHTTP({
        schema
    }),
);

app.listen(port, () => {
    console.log('Server goes brr on', port);
});