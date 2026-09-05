import Card from"./card";
function Column({title,tasks,setEditTask ,onDelete}) {
  const filteredTasks =tasks.filter(
    (task)=>task.status === title);
  
  return (
    <div>
        <h2>{title}</h2>
        {filteredTasks.map(task=>(
          <Card key={task.id}
                title={task.name}
                 description={task.description}
  priority={task.priority}
  dueDate={task.dueDate}
  onEdit={() => setEditTask(task)}
  onDelete={() => onDelete(task.id)}/>
        ))}
    </div>
  );
}

export default Column;