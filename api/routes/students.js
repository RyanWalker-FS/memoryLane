const express = require("express");
const router = express.Router();
const Student = require("../models/students");

const getStudent = async (req, res, next) => {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student === null) {
      return res.status(404).json({ message: "Cannot find student" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.student = student;
  next();
};

// GET ALL
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONE
router.get("/:id", getStudent, async (req, res) => {
  res.json(res.student);
});

// Post ONE
router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Patch update
router.patch("/:id", getStudent, async (req, res) => {
  if (req.body.name != null) {
    res.student.name = req.body.name;
  }
  if (req.body.class != null) {
    res.student.class = req.body.class;
  }
  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", getStudent, async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    res.json({ message: "Deleted student" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
