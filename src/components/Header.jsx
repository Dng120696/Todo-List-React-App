export function Header({ isDark, onSetDark }) {
  return (
    <header>
      <h1 className="header__title">TODO</h1>
      <div className="toggle__theme" onClick={() => onSetDark((dark) => !dark)}>
        <img
          src={isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt="icon"
        />
      </div>
    </header>
  );
}
