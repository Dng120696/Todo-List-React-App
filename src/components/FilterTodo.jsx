export function FilterTodo({ onActive, active }) {
  return (
    <ul className="filter__todo">
      {["All", "Active", "Completed"].map((item, i) => (
        <li
          key={i}
          onClick={() => onActive(item)}
          className={`item ${active === item ? "text-Bright-Blue" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
