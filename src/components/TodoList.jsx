import { TodoItem } from "./TodoItem";

export function TodoList({ todoItem, onDeleteItem, onToggleItem }) {
  return (
    <ul className="todo__list">
      {todoItem.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
}
