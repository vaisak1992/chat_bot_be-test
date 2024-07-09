const express = require("express");
const router = express.Router();
const queryControllers = require("./query.controller");

router.post("/", queryControllers.searchQuery);

module.exports = router;
