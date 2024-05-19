import { Router } from "express";
import Task from "../models/Task";

const router = Router();

// All routes for the App
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});
router.post("/tasks", async (req, res) => {
  // User sends a request with a title and description
  const { title, description } = req.body;

  // A new task is created with the desestrutured request data sent by user
  const task = new Task({ title, description });

  // Save data on the mongodb database
  await task.save();

  res.json(task);
});
router.get("/tasks/:id", (req, res) => {
  res.send("Testing route Getting a unique Task!");
});
router.delete("/tasks/:id", (req, res) => {
  res.send("Testing route Deleting a Task!");
});
router.put("/tasks/:id", (req, res) => {
  res.send("Testing route Updating a Task!");
});

export default router;
