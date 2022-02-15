const router = require("express").Router();
const sequelize = require("../config/connection");
const { Product, User, Category, Review } = require("../models");

//get all
router.get("/", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({
          plain: true,
        })
      );

      res.render("homepage", {
        categories,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get single item
router.get("/post/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category_name"],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }

      const category = dbCategoryData.get({ plain: true });

      res.render("single-post", {
        category,
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
