import { Router } from "express";

const router = Router();

// All routes for the App
router.get("/tasks", (req, res) => {
  res.send("Testing route Getting all tasks!");
});
router.post("/tasks", (req, res) => {
  res.send("Testing route Creating a task!");
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
