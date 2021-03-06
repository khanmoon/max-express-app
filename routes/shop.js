const path = require("path");
const express = require("express");
const adminData = require("./admin");
const router = express.Router();

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});

module.exports = router;
