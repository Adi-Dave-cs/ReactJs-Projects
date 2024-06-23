import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <>
      <div className={`App ${isDark ? "dark" : "light"}`}>
        <Header theme={[isDark, setIsDark]} />
        <Outlet context={[isDark, setIsDark]} />
      </div>
    </>
  );
}
