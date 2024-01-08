const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/create", ProductController.showCreateProduct);
router.post("/create", ProductController.showCreateProductPost);
router.get("/", ProductController.showProducts);

module.exports = router;
