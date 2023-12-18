export function DeleteAllTodos() {
  function handleSubmit() {
    localStorage.clear();
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <button className="btn">Clear All</button>
    </form>
  );
}
