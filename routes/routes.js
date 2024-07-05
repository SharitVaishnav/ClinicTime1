const express = require("express");
const router = express.Router();

const {user} = require("../controllers/user");
const {admin} = require("../controllers/admin");

router.post("/user",user);
router.get("/admin",admin);

module.exports = router;