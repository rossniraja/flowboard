function ListView({ tasks }) {
  return (
    <div className="list-view">

      <div className="list-header">
        <span>Task</span>
        <span>Status</span>
        <span>Priority</span>
        <span>Due Date</span>
      </div>

      {tasks.map((task) => (
        <div className="list-row" key={task.id}>

          <span className="task-name">
            {task.name}
          </span>

          <span className={`status ${task.status}`}>
            {task.status}
          </span>

          <span className="priority">
            {task.priority}
          </span>

          <span className="due-date">
            {task.dueDate}
          </span>

        </div>
      ))}

    </div>
  );
}

export default ListView;