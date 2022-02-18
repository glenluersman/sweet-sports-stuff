const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Product, Review, Category } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      attributes: ["id", "product_name", "price", "product_desc"],
      include: [{ model: Category, attributes: ["category_name"] }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      attributes: ["id", "product_name", "price"],
      include: [{ model: Review, attributes: ["id", "content", "user_id"] }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
