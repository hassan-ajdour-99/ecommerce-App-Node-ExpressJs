const express = require("express");
// const baseController = require("../controllers/base-controller");
const router = express.Router();

// ... Home ::: all-products
router.get("/products", (req, res) => {
  res.render("customer/products/all-products");
});

module.exports = router;
