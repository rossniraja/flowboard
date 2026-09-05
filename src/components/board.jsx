import EditTaskForm from "./EditTaskForm";
import { useState } from "react";
import Column from "./column";

function Board({ tasks, setTasks }) {
  const [editTask, setEditTask] = useState(null);

  function handleDelete(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div className="board">
      <Column
        title="todo"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
      />

      <Column
        title="progress"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
      />

      <Column
        title="done"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
      />

      {editTask && (
        <EditTaskForm
          task={editTask}
          setTasks={setTasks}
          setEditTask={setEditTask}
        />
      )}
    </div>
  );
}

export default Board;