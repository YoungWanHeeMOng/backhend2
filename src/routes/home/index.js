"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // MVC - 중간 제어 

router.get('/', ctrl.output.home);

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);


module.exports = router;