const express = require("express");
const {
  getData,
  getOneData,
  postData,
  putData,
  deleteData,
} = require("../controllers/controllers");
const router = express.Router();

// get Route
router.get("/", getData);
// get One RouteData
router.get("/:id", getOneData);
// Post Route
router.post("/", postData);
// Update Route
router.put("/:id", putData);

// Delete Router
router.delete("/:id", deleteData);

module.exports = router;
