function Card({ title, description,priority,dueDate,onEdit,onDelete}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{priority}</p>
      <p>{dueDate}</p>
      <button onClick={onEdit}>edit</button>
      <button onClick={onDelete}>Delete</button>
      
    </div>
  );
}
export default Card;