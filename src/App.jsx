import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Profile from "./Profile.jsx";

function App() {
  // const [tab, setTab] = useState("Profile");

  const [view, setview] = useState(false);
  const changeview = () => {
    view ? setview(false) : setview(true);
  };

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
