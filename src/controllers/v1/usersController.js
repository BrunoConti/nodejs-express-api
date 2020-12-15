const bcrypt = require('bcrypt');
const Users = require('../../models/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (user) {
      const isOK = await bcrypt.compare(password, user.password);
      isOK
        ? res.send({ status: 'OK', data: {} })
        : res.status(401).send({ status: 'INVALID PASSWORD', message: '' });
    } else {
      res.status(401).send({ status: 'USER NOT FOUND', message: '' });
    }
  } catch (err) {
    res.status(500).send({ status: 'Error', message: err.message });
  }
};

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

module.exports = { createUser, deleteUser, getUsers, updateUser, login };
