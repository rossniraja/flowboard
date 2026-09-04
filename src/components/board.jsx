import AddTaskForm from "./addTaskForm";
import { useState } from "react";
import Column from "./column";

function Board() {
  const [tasks, setTasks] = useState([
  {
    id: "1",
    name: "assign",
    status: "todo",
  },
  {
    id: "2",
    name: "seminar",
    status: "progress",
  }
]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>FlowBoard</h1>
      <button onClick={() => setShowForm(true)}>Add Task</button>
      {showForm && <AddTaskForm 
  setTasks={setTasks} 
  setShowForm={setShowForm} />}
      <div className="board">
        <Column title="todo" tasks={tasks} />
        <Column title="progress" tasks={tasks} />
        <Column title="done" tasks={tasks} />
      </div>
    </div>
  );
}

export default Board;