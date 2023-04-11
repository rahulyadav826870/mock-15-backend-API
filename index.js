const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const {connection} =require("./db/db");
const { tripRoutes } = require("./Routes/trip.route");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Home Page")
})

app.use("/trip",tripRoutes)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log(`Connect to MongoDB ${process.env.PORT}`);
  } catch (error) {}
});
