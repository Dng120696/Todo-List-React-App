export function TodoItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="todo__item">
      <div className="wrap__todo">
        <div
          className={`item__circle ${
            item.isCompleted ? "bg-gradient-hsl" : ""
          }`}
          onClick={() => onToggleItem(item.id)}
        >
          {item.isCompleted && <img src="./images/icon-check.svg" alt="" />}
        </div>
        <p
          className={`todo__txt  ${
            item.isCompleted ? "line-through completed" : ""
          }`}
        >
          {item.text}
        </p>
      </div>

      <img
        src="./images/icon-cross.svg"
        alt=""
        className="btn__delete"
        onClick={() => onDeleteItem(item.id)}
      />
    </li>
  );
}
