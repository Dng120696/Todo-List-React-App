export function Form({ todoVal, onSubmit, onSetTodoVal }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="circle input__circle"></div>
      <input
        type="text"
        name="inputText"
        className="input__todo"
        placeholder="Create a new todo..."
        value={todoVal}
        onChange={(e) => onSetTodoVal(e.target.value)}
      />
    </form>
  );
}
