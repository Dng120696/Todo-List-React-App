export function TodoOption({ itemLength, onClearCompleted }) {
  return (
    <div className="todo__option">
      <p className="item__count">{itemLength} item left</p>
      <p className="clear__completed" onClick={onClearCompleted}>
        Clear Completed
      </p>
    </div>
  );
}
