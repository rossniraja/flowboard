import Card from"./card";
function Column({title,tasks,setEditTask ,onDelete,onDrop}) {
  const filteredTasks =tasks.filter(
    (task)=>task.status === title);
  const handleDragOver=(e)=>{
    e.preventDefault();
  };
  const handleDrop=(e)=>{
    const taskId=e.dataTransfer.getData("taskId");
    onDrop(taskId,title)
  }
  return (
<div className="Column"
onDragOver={handleDragOver}
onDrop={handleDrop}>
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
    </div>
  );
}

export default Column;