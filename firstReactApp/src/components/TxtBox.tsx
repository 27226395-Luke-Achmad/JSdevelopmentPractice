import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

type TxtBoxProps = {
  task: string;
  setUserInput: (text: string) => void;
};

function TxtBox({ task, setUserInput }: TxtBoxProps) {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.length > 0) {
      setUserInput(text);
    }
  };

  console.log(`TxtBox Editing: ${task}`);
  return (
    <aside className="txtbox">
      <form onSubmit={handleSubmit}>
        <h2> {task}</h2>
        <input
          type="text"
          value={text} // controlled value
          onChange={(e) => setText(e.target.value)} // update state
          style={{ width: "95%", padding: "8px" }}
        />
        <input type="submit" value={"Submit"} />
      </form>
    </aside>
  );
}

export default TxtBox;

/*
Ban duplicate entries and start empty with default message in InfoBar.
*/
