const { register } = require("../controller/userCtrl");



const router = require("express").Router();

router.post("/register",register);

module.exports =router;