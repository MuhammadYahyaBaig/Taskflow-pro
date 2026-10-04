import Task from "../models/Tasks.js";

// ---- READ: saare tasks ----
export const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};
// ---- CREATE: naya task ----
export const createTask = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json(newTask);
};
// ---- UPDATE: id se task edit ----
export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // badalta huwa task wapis do
  });
  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(updatedTask);
};
// ---- DELETE: id se task remove ----
export const deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task deleted", id: req.params.id });
};
