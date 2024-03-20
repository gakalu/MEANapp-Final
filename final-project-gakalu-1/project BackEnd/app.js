const express = require("express");
const mongoose = require("mongoose");
const deviceRouter = require('./Router/DeviceRouter');
const userRouter = require('./Router/User');
mongoose.connect("mongodb://localhost:27017/House-Device-System", (err) => {
  if (err) {
    console.log("There is error to connect the database", err.message);
  } else {
    console.log("Databas is connected");
  }
});
const app = express();
app.use(express.json());

app.use("/devices",deviceRouter);

app.use('/users', userRouter)
app.use((req, res,next) => {
  res.send("It is not supported");
});
app.use((err, req, res, next) => {
  if (err && err.message) {
    res.send(err.message);
  } else res.send("Error");
});
app.listen(3000, console.log("3000 port is listening"));
