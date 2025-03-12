// require('dotenv').config();
// const express = require("express")
// const app = express()
// const dbConnect = require("./DB/db");
// const router = require('./routes/authRoutes');
// const messDataRoutes = require('./routes/messFormRoutes')
// const cors = require("cors")
// const cookieParser = require("cookie-parser")

// const corsOption = {
//     origin: "http://localhost:4200",
//     methods:"POST,GET,PATCH,DELETE,HEAD",
//     credentials: true,
// }

// app.use("*",cors(corsOption));
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.text());

// app.use("/api/user/",router)
// app.use("/api/user/",messDataRoutes)


// app.listen(process.env.PORT,()=>{
//     console.log(`Server is listening on port ${process.env.PORT}`);
// })

// dbConnect()

require('dotenv').config();
const express = require("express");
const app = express();
const dbConnect = require("./DB/db");
const router = require('./routes/authRoutes');
const messDataRoutes = require('./routes/messFormRoutes');
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
    origin: "http://localhost:4200", // Explicitly allow frontend origin
    methods: "POST,GET,PATCH,DELETE,OPTIONS,HEAD",
    credentials: true // Allow cookies and authentication
};

// Apply CORS middleware before defining routes
app.use("http://localhost:4200",cors(corsOptions));
app.options("http://localhost:4200", cors(corsOptions)); // Handle preflight requests

app.use(cookieParser());
app.use(express.json());
app.use(express.text());

// Define routes after middleware
app.use("/api/user/", router);
app.use("/api/user/", messDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Connect to database
dbConnect();