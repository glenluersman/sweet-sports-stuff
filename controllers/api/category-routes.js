const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Product, Review, Category } = require("../../models");

router.get("/");
