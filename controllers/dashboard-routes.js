const router = require("express").Router();
const { post } = require(".");
const sequelize = require("../config/connection");

const withAuth = require("../utils/auth");

//get all dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  Review.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "content"],
  })
    .then((dbReviewData) => {
      const reviews = dbReviewData.map((review) => review.get({ plain: true }));
      res.render("dashboard", { reviews, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", withAuth, (req, res) => {
  Review.findByPk(req.params.id, {
    attributes: ["id", "title", "content"],
  })
    .then((dbReviewData) => {
      if (dbReviewData) {
        const review = dbReviewData.get({ plain: true });

        res.render("edit-post", {
          review,
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
