import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useTheme(); // 1
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

export default function App1() {
  return (
    <ThemeProvider>        {/* 2 */}
      <div>
        <h1>My app</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}
