const router = require("express").Router();
const sequelize = require("../config/connection");
const { Product, User, Category, Review } = require("../models");

//get all
router.get("/", (req, res) => {
  Product.findAll({
    attributes: ["id", "product_name", "price", "product_desc"],
    include: [{ model: Category, attributes: ["category_name"] }],
  })
    .then((dbProductData) => {
      const products = dbProductData.map((product) =>
        product.get({
          plain: true,
        })
      );

      res.render("homepage", {
        products,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get single product
router.get("/product/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "product_name", "price", "product_desc"],
    include: [
      {
        model: Review,
        attributes: ["id", "content", "user_id", "product_id"],
      },
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }

      const product = dbProductData.get({ plain: true });

      res.render("product-details", {
        product,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
