const express = require("express")
const { addUser, loginUser,getUser, logoutUser, messFormRendering } = require("../controllers/authControllers")
const messFormAccessMiddleware = require("../middlewares/messFormAccessMiddleware")

const router = express.Router()


router.post("/register",addUser)
router.post("/login",loginUser)
router.get("/getUser",getUser)
router.get("/messFormRendering",messFormAccessMiddleware,messFormRendering)
router.post("/logout",logoutUser)

module.exports = router;