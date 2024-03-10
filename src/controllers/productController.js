const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting products:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error getting product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const updateProductById = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error updating product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteProductById = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
  };