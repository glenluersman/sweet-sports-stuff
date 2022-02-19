const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Review.findAll()
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  console.log(req.body);
  Review.create({
    content: req.body.content,
    user_id: req.session.user_id,
    product_id: req.body.product_id,
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
