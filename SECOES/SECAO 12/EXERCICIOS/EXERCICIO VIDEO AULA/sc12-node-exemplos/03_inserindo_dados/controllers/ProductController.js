const Product = require("../models/Product");

module.exports = class ProductController {
  static async showProducts(req, res) {
    res.render("products/all");
  }

  static showCreateProduct(req, res) {
    res.render("products/create");
  }

  static async showCreateProductPost(req, res)
  {
    const { name, price, description } = req.body;

    const product = new Product(name, price, description);

    product.save();

    res.redirect('/products');
  }
};
