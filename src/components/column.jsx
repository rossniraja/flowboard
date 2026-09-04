import Card from"./card";
function Column({title,tasks}) {
  const filteredTasks =tasks.filter(
    (task)=>task.status === title);
  
  return (
    <div>
        <h2>{title}</h2>
        {filteredTasks.map(task=>(
          <Card key={task.id}
                title={task.name}/>
        ))}
    </div>
  );
}

export default Column;