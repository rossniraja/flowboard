import CalendarView from "./components/CalendarView";
import ListView from "./components/ListView";
import Board from "./components/Board";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks=localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks):
    [
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
    
  {
    id: "3",
    name: "project",
    status: "todo",
  },
  {
    id: "4",
    name: "presentation",
    status: "done",
  },
  {
    id: "5",
    name: "study",
    status: "progress",
  },
  {
    id: "6",
    name: "report",
    status: "todo",
  },
  {
    id: "7",
    name: "meeting",
    status: "done",
  },
  {
    id: "8",
    name: "research",
    status: "progress",
  },
  {
    id: "9",
    name: "documentation",
    status: "todo",
  },
  {
    id: "10",
    name: "submission",
    status: "done",
  },
  ];
});
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);
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