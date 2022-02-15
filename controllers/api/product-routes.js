const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Product, Review, Category } = require("../../models");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll({});
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      res.status(404).send({ error: "Item not found" });
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
