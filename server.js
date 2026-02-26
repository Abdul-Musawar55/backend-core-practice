require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db")

const app = express();

const checkApiKey = require("./middlewares/checkApiKey.middleware")
const checkAge = require("./middlewares/checkAge.middleware")
const notFound = require("./middlewares/notfound")

connectDB();
app.use(cors("*"));
app.use(express.json());


app.use(express.urlencoded({extended: true}))

app.get("/secure",checkApiKey, checkAge, notFound, (req, res)=>{
    res.status(200).send({message: "Hello World!"})
})

app.use("/api/V1/auth", require("./routes/auth.route"))
app.use("/api/V1/users", require("./routes/user.route"))
app.use("/api/V1/products", require("./routes/product.route"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
})