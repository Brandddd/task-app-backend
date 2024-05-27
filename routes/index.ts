import { Router } from "express";
import Task from "../models/Task";

const router = Router();
// All routes for the App
// Get all Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error: any) {
    console.error(error);
  }
});

// Create a Task
router.post("/tasks", async (req, res) => {
  try {
    // User sends a request with a title and description
    const { title, description } = req.body;
    // A new task is created with the desestrutured request data sent by user
    const task = new Task({ title, description });
    // Save data on the mongodb database
    await task.save();
    res.json(task);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Get a Task
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found!" });
    res.send("Task deleted successfully");
  } catch (error: any) {
    res.send("A error has ocurred while trying to get task!");
    console.error("A error has ocurred while trying to get task!");
  }
});

// Delete a Task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task)
      return res.status(404).json({ message: "Task to delete not found!" });
    res.send(task);
  } catch (error: any) {
    res.send("A error has ocurred while trying to delete task!");
    console.error("A error has ocurred while trying to delete task!");
  }
});

// Update a Task
router.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedTask);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: "Internal Server Error" });
  }
});

export default router;
