import { useState } from "react";
import { DragList } from "./DragList";
import { FilterTodo } from "./FilterTodo";
import { TodoOption } from "./TodoOption";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { Form } from "./Form";
import { Header } from "./Header";
import { data } from "./data";

export function Main({ isDark, onSetDark }) {
  const [todoVal, setTodoVal] = useState("");
  const [todoItem, setTodoItem] = useState(data);
  const [active, setActive] = useState("All");

  const filterAll = todoItem;
  const filterActiveItem = todoItem.filter((item) => !item.isCompleted);
  const filterCompletedItem = todoItem.filter((item) => item.isCompleted);

  const itemList = {
    All: filterAll,
    Active: filterActiveItem,
    Completed: filterCompletedItem,
  };

  const itemLength = itemList[active].length;

  function handleActive(list) {
    setActive(list);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todoVal) return;
    setTodoItem((item) => [
      ...item,
      { text: todoVal, isCompleted: false, id: crypto.randomUUID() },
    ]);
    setTodoVal("");
  }

  function handleDeleteItem(id) {
    setTodoItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setTodoItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function handleClearCompleted() {
    setTodoItem((items) => items.filter((item) => !item.isCompleted));
  }

  return (
    <main className="main__container">
      <Header isDark={isDark} onSetDark={onSetDark} />
      <Form
        todoVal={todoVal}
        onSubmit={handleSubmit}
        onSetTodoVal={setTodoVal}
      />
      <TodoContainer>
        <TodoList
          todoItem={itemList[active]}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <TodoOption
          itemLength={itemLength}
          onClearCompleted={handleClearCompleted}
        />
        <FilterTodo active={active} onActive={handleActive} />
      </TodoContainer>
      <DragList />
    </main>
  );
}
