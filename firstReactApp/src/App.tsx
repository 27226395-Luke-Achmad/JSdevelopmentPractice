import LeftBar from "./components/LeftBar";
import TxtBox from "./components/TxtBox";
import Middle from "./components/Middle";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [taskRowSelected, setTaskRowSelected] = useState("");
  const [daySelected, setDaySelected] = useState("");
  const [userInput, setUserInput] = useState("");

  return (
    <div className="container">
      <LeftBar setDay={setDaySelected} />
      <Middle day={daySelected} taskSelected={taskRowSelected} userInput={userInput} setTaskSelected={setTaskRowSelected} />
      <TxtBox task={taskRowSelected} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
