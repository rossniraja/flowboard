function CalendarView({ tasks }) {
  return (
    <div className="calendar-view">
      <h2>Timeline</h2>

      <div className="timeline">
        {tasks.map((task) => (
          <div className="timeline-task" key={task.id}>

            <div className="timeline-date">
              {task.dueDate || "No due date"}
            </div>

            <div className="timeline-point"></div>

            <div className="timeline-content">
              <h3>{task.name}</h3>

              <span className={`status ${task.status}`}>
                {task.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;