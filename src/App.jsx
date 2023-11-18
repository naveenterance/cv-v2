import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
