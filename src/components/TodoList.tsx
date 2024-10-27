function getImgSrc() {
  return "https://i.pravatar.cc/150?img=10";
}

function TodoList() {
  const name = "Hedy Lamarr";

  return (
    <>
      <h1>{name}'s Todos</h1>
      <img src={getImgSrc()} alt={name} className="photo" />
      <ul style={{ backgroundColor: "red" }}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export default TodoList;
