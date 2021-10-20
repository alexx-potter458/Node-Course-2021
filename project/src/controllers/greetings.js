
const greetingHandler = (req, res) => {
    if(!req.params.name) {
        res.send("Hello amgios");
    } else {
        let message = 'Hello ' + req.params.name;
        res.send(message);
    }  
}

module.exports.greetingHandler = greetingHandler;