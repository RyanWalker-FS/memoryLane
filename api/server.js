const express = require("express");
require("dotenv").config();
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

const studentsRouter = require("./routes/students");

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connected to Database"));

router.post("/students", (req, res) => {
  // Handle the POST request here
  res.send("Student created successfully!");
});

app.use(express.json());
app.use("/students", studentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
