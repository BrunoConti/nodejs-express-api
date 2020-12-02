const createUser = (req, res) => {
  res.send({ status: 'OK', message: 'user created' });
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
