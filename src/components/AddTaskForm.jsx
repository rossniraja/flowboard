import {useState} from "react";
function AddTaskForm({setTasks,setShowForm}) {
     const [name, setName] = useState("");
     const [description, setDescription] = useState("");
     const [status, setStatus] = useState("todo");
     const [priority, setPriority] = useState("Low");
     const [dueDate, setDueDate] = useState("");
    function handleSubmit(e){
    e.preventDefault();
   

    const newTask = {
      id: Date.now().toString(),
      name: name.trim(),
      description:description,
      status:status,
      priority:priority,
      dueDate:dueDate
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowForm(false);
  }
  return (
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        placeholder="Task title"
        value={name}
         onChange={(e) => setName(e.target.value)}
         required
          />
      

      <textarea

        placeholder="Task description"
        value={description}
onChange={(e) => setDescription(e.target.value)}
required
      ></textarea>

      <select  value={status}
        onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="progress">Progress</option>
        <option value="done">Done</option>
       
      </select>

      <select  value={priority}
           onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
       
      </select>

      <input type="date"
      value={dueDate}
onChange={(e) => setDueDate(e.target.value)} 
required/>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;