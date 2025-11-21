import React, { useState } from "react";
import axios from "axios";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend-url/tasks", {
      title,
      description,
      priority
    });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
