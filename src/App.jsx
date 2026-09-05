import CalendarView from "./components/CalendarView";
import ListView from "./components/ListView";
import Board from "./components/Board";
import AddTaskForm from "./components/AddTaskForm";
import "./app.css";
import { useState } from "react";

function App() {
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
    },
  ]);

  const [view, setView] = useState("board");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <h1>FlowBoard</h1>


      {showForm && (
        <AddTaskForm
          setTasks={setTasks}
          setShowForm={setShowForm}
        />
      )}

      <button onClick={() => setView("board")}>
        Board
      </button>

      <button onClick={() => setView("list")}>
        List
      </button>

      <button onClick={() => setView("calendar")}>
        Calendar
      </button>

      <button onClick={() => setShowForm(true)}>
        Add Task
      </button>
      {view === "board" && (
        <Board
          tasks={tasks}
          setTasks={setTasks}
        />
      )}

      {view === "list" && (
        <ListView
          tasks={tasks}
        />
      )}

      {view === "calendar" && (
  <CalendarView tasks={tasks} />
)}
    </>
  );
}

export default App;