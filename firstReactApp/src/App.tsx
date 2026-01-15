import InfoBar from "./components/InfoBar";
import LeftBar from "./components/LeftBar";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [highlighted, setHighlighted] = useState("");

  return (
    <div className="app">
      <LeftBar setHighlighted={setHighlighted} />
      <InfoBar text={highlighted} />
    </div>
  );
}

export default App;
