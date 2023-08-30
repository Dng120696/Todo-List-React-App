import { useState } from "react";
import { Main } from "./MainSection";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`wrapper ${isDark ? "dark" : "light"}`}>
      <Main isDark={isDark} onSetDark={setIsDark} />
    </div>
  );
}
