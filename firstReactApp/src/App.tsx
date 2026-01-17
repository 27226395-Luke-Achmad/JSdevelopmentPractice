import LeftBar from "./components/LeftBar";
import TxtBox from "./components/TxtBox";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import TaskArea from "./components/TaskArea";

// The App serves as a Nexus for states between LeftBar, Middle, and TxtBox components.

function App() {
  const [taskSelected, setTaskSelected] = useState("");
  const [daySelected, setDaySelected] = useState("");
  const [userInput, setUserInput] = useState("");

  return (
    <div className="container">
      <LeftBar setDaySelected={setDaySelected} />

      <TaskArea
        taskSelected={taskSelected}
        setTaskSelected={setTaskSelected}
        daySelected={daySelected}
        userInput={userInput}
      />

      <TxtBox taskSelected={taskSelected} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
