const db = require('../models');

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.User.findAll();
    res.send(allUsers);
  } catch (error) {
    console.error('Something went wrong');
    res.send({
      error: "Something went wrong",
    });
  } 
}

module.exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const userById = await db.User.findByPk(userId);
    res.send(userById);
  } catch (error) {
    console.error('Something went wrong');
    res.send({
      error: "Something went wrong",
    });
  } 
}

module.exports.createUser = async (req, res) => {
  const {
    email,
    firstName,
    lastName,
  } = req.body

  try {
    const newUser = await db.User.create({
      email,
      firstName,
      lastName,
    });

    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong here",
    });
  }
}


module.exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const {email, firstName, lastName} = req.body;

  try {
    const updateUser = await db.User.update(
      {
        email,
        firstName,
        lastName,
      }, {
        where: {id: userId}
      }
    );

    res.send("User updated successfully");
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong here",
    });
  }
}



module.exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userById = await db.User.destroy({
      where: {
        id: userId
      }
    });
   
    res.send({"status":"User deleted successfully"});
  } catch (error) {
    console.error('Something went wrong');
    res.send({
      error: "Something went wrong",
    });
  } 
}