const bcrypt = require('bcrypt');
const Users = require('../../models/users');

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 15);

    const user = await Users.create({
      username,
      email,
      password: hash,
    });

    res.send({ status: 'OK', data: user });
  } catch (error) {
    console.log('Create user error:', err);
    res.status(500).send({ status: 'Error', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'user deleted' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', message: 'show users' });
};

const updateUser = async (req, res) => {
  try {
    const { username, email, role } = req.body;

    await Users.findByIdAndUpdate(req.params.userId, {
      username,
      email,
      role,
    });

    res.send({ status: 'OK', message: 'user updated' });
  } catch (err) {
    console.log('Update user error:', err);
    res.send({ status: 'OK', message: err.message });
  }
};

module.exports = { createUser, deleteUser, getUsers, updateUser };
