function ListGroup() {
  let items = ["new york", "san francisco", "tokyo", "paris", "london"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>no item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
