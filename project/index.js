const express = require('express');
const bodyParser = require('body-parser');


const myFunFact = require('./controllers/facts');
const {greetingHandler} = require('./controllers/greetings');
const { port } = require('./config/express');
const authorizationMiddleware = require('./middlewares/authMiddleware');
const loginHandler = require('./controllers/login');
const { getAllUsers, getUserById, updateUser, createUser, deleteUser } = require('./controllers/users');
const { getAllPosts, getPostById, createPost, updatePost, deletePost, addTagToPost } = require('./controllers/posts');

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

app.get('/users', getAllUsers);

app.get('/users/:id', getUserById);

app.post('/users', createUser);

app.put('/users/:id', updateUser);

app.delete('/users/:id', deleteUser);


app.post("/users/:id/posts", createPost);

app.get("/posts", getAllPosts);

app.get("/posts/:id", getPostById);

app.post("/posts/:postId/tags/:tagId", addTagToPost);

app.put("/posts/:id", updatePost);

app.delete("/posts/:id", deletePost);

app.listen(port, () => {
    console.log('Server goes brr on', port);
});