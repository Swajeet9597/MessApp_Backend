const express = require("express")
const { addUser, loginUser,getUser } = require("../controllers/authControllers")

const router = express.Router()


router.post("/register",addUser)
router.post("/login",loginUser)
router.route("/getUser",getUser)

module.exports = router;