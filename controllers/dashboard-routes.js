const router = require("express").Router();
const { post } = require(".");
const sequelize = require("../config/connection");

const withAuth = require("../utils/auth");

//get all dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  post
    .findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [],
      include: [
        {
          model: "",
          attributes: [],
          include: {
            model: "",
            attributes: ["username"],
          },
        },
        {
          model: "",
          attributes: ["username"],
        },
      ],
    })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  post
    .findByPk(req.params.id, {
      attributes: [],
      include: [
        {
          model: "",
          attributes: [],
          include: {
            model: "",
            attributes: ["username"],
          },
        },
        {
          model: "",
          attributes: ["username"],
        },
      ],
    })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
