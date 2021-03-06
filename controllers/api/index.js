const router = require("express").Router();

const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");
const reviewRoutes = require("./review-routes");
const categoryRoutes = require("./category-routes");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
