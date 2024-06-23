import { useState } from "react";

export default function Header({ theme }) {
  const [isDark, setIsDark] = theme;

  function toggle() {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem("isDark", "false");
    } else {
      setIsDark(true);
      localStorage.setItem("isDark", "true");
    }
  }

  return (
    <>
      <div className="nav">
        <p className="leftSpace fontVerdana fontItalic fontLarge">
          Where in the world ?
        </p>
        <button
          className="fontCursive rightSpace borderless NavButton"
          onClick={toggle}
        >
          Light Mode
        </button>
      </div>
    </>
  );
}
