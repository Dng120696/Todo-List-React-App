import { useEffect, useState } from "react";
import { Main } from "./MainSection";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isTheme"))
  );

  useEffect(() => {
    localStorage.setItem("isTheme", JSON.stringify(isDark));
  });

  return (
    <div className={`wrapper ${isDark ? "dark" : "light"}`}>
      <Main isDark={isDark} onSetDark={setIsDark} />
    </div>
  );
}
