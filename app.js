const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((err,req,res,next)=>{
    res.status(500).send({error:err.massage});
});

module.exports = app;
