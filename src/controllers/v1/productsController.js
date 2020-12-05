const Product = require('../../models/products');

const createProduct = async (req, res) => {
  try {
    const { title, description, price, userId } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
      user: userId,
    });

    res.send({ status: 'OK', data: product });
  } catch (err) {
    res.status(400).send({ status: 'Error', message: err.message });
  }
};

const deleteProduct = (req, res) => {};

const getProducts = async (req, res) => {
  try {
    const product = await Product.find()
      .select('title description price')
      .populate('user', 'id username email');

    res.send({ status: 'OK', data: product });
  } catch (err) {
    res.status(400).send({ status: 'Error', message: err.message });
  }
};

const getProductsByUser = async (req, res) => {
  try {
    const product = await Product.find({
      user: req.params.userId,
    });

    res.send({ status: 'OK', data: product });
  } catch (err) {
    res.status(400).send({ status: 'Error', message: err.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsByUser,
};
