const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    await bcrypt.hash(req.body.password, 15);
    res.send({ status: 'OK', message: 'user created' });
  } catch (error) {
    res.status(500).send({ status: 'OK', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'user deleted' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', message: 'show users' });
};

const updateUser = (req, res) => {
  res.send({ status: 'OK', message: 'user updated' });
};

module.exports = { createUser, deleteUser, getUsers, updateUser };
