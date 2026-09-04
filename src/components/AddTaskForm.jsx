import {useState} from "react";
function AddTaskForm({setTasks,setShowForm}) {
     const [name, setName] = useState("");
    function handleSubmit(e){
    e.preventDefault();
    console.log("ADD TASK CLICKED");
    console.log("clicked");
  console.log("name:", name);
    const newTask = {
      id: Date.now().toString(),
      name: name,
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowForm(false);
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Task name" 
        value={name}
         onChange={(e) => setName(e.target.value)} />
      <input
        type="text"
        placeholder="Task title"
      />

      <textarea
        placeholder="Task description"
      />

      <select>
        <option value="todo">Todo</option>
        <option value="progress">Progress</option>
        <option value="done">Done</option>
      </select>

      <select>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input type="date" />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;