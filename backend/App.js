const express = require("express");
const mangoose = require("mongoose");
const app = express();
const cors = require("cors");
require("./Conn/conn");
const auth = require("./routes/Auth.js");
const list = require("./routes/list.js");
app.use(cors());

app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(8000, () =>{
    console.log("server started")
})