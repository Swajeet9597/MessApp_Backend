require('dotenv').config();
const express = require("express")
const app = express()
const dbConnect = require("./DB/db");
const router = require('./routes/authRoutes');
const cors = require("cors")
const cookieParser = require("cookie-parser")

const corsOption = {
    origin: "http://localhost:5173",
    methods:"POST,GET,PATCH,DELETE,HEAD",
    credentials: true,
}

app.use("*",cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());

app.use("/api/user/",router)
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})

dbConnect()