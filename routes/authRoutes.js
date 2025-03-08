const express = require("express")
const { addUser, loginUser,getUser, logoutUser, messFormRendering } = require("../controllers/authControllers")
const messFormAccessMiddleware = require("../middlewares/messFormAccessMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/register",addUser)
router.post("/login",loginUser)
router.get("/auth",authMiddleware,(req,res)=>{
    // res.status(200).json({
    //     success: true,
    //     msg:"Done"
    // })
})
router.get("/getUser",getUser)
router.get("/messFormRendering",messFormAccessMiddleware,messFormRendering)
router.post("/logout",logoutUser)

module.exports = router;