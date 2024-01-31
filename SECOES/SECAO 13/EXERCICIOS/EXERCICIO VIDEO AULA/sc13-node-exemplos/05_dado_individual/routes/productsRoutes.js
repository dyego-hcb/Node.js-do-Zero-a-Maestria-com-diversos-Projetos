const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/create", ProductController.showCreateProduct);
router.post("/create", ProductController.showCreateProductPost);
// router.post("/remove/:id", ProductController.removeProductPost);
// router.get("/edit/:id", ProductController.showEditProduct);
// router.post("/edit", ProductController.showEditProductPost);
router.get("/:id", ProductController.showProduct);
router.get("/", ProductController.showProducts);

module.exports = router;
