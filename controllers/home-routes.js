const router = require("express").Router();
const { post } = require(".");
const sequelize = require("../config/connection");
const {} = require("../models");

//get all
router.get("/", (req, res) => {
  post
    .findAll({
      attributes: [],
      include: [
        {
          model: "",
          attributes: "",
          include: {
            model: "",
            attributes: "",
          },
        },
        {
          model: "",
          attributes: [],
        },
      ],
    })
    .then((dbPostData) => {
      const items = dbPostData.map((post) =>
        post.get({
          plain: true,
        })
      );

      res.render("homepage", {
        posts,
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
  post
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [],
      include: [
        {
          model: "",
          attributes: "",
          include: {
            model: "",
            attributes: [],
          },
        },
        {
          model: "",
          attributes: [],
        },
      ],
    })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
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
