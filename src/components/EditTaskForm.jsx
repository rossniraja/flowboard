import { useState } from "react";

function EditTaskForm({ task, setTasks, setEditTask }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedTask = {
      ...task,
      name: name.trim(),
      description: description.trim(),
      status: status,
      priority: priority,
      dueDate: dueDate
    };

    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === task.id ? updatedTask : item
      )
    );

    setEditTask(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="progress">Progress</option>
        <option value="done">Done</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditTask(null)}>
        Cancel
      </button>
    </form>
  );
}

export default EditTaskForm;