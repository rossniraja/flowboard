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
function handleDrop(taskId,newStatus){
   setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
}
  return (
    <div className="board">
      <Column
        title="todo"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
          onDrop={handleDrop}

      />

      <Column
        title="progress"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
          onDrop={handleDrop}

      />

      <Column
        title="done"
        tasks={tasks}
        setEditTask={setEditTask}
        onDelete={handleDelete}
          onDrop={handleDrop}

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