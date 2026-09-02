import Card from"./card";
function Column({title}) {
  return (
    <div>
        <h2>{title}</h2>
        
      <Card
        title="Build Navbar"
        description="Create the navigation bar"
      />

      <Card
        title="Create Dashboard"
        description="Build the main dashboard"
      />

      <Card
        title="Connect API"
        description="Connect the backend API"
      />
    </div>
  );
}

export default Column;