import Column from"./column";
function Board() {
  return (
    <div>
      <h1>FlowBoard</h1>

      <div className="board">
      <Column title="todo" />
      <Column title="progress" />
      <Column title="done" />
      </div>
    </div>
  );
}

export default Board;