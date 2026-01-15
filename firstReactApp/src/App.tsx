import InfoBar from "./components/InfoBar";
import LeftBar from "./components/LeftBar";
import Middle from "./components/Middle";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [highlighted, setHighlighted] = useState("");

  return (
    <div className="container">
      <LeftBar setHighlighted={setHighlighted} />
      <Middle text={highlighted} />
      <InfoBar text={highlighted} />
    </div>
  );
}

export default App;
