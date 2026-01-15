import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type SidebarProps = {
  setHighlighted: (text: string) => void;
};

function LeftBar({ setHighlighted }: SidebarProps) {
  const [selected, setSelected] = useState("");

  const handleClick = (day: string) => {
    setSelected(day);
    console.log(`${day} selected`);
    setHighlighted(day);
  };
  return (
    <aside className="leftbar">
      <h2>WeekDays</h2>
      <ul className="list-group">
        <li
          className="list-group-item"
          key={"Monday"}
          onClick={() => handleClick("Monday")}
          style={{
            cursor: "pointer",
            backgroundColor: selected !== "Monday" ? " #008afb" : "transparent",
            color: selected === "Monday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Monday" ? 700 : 400,
          }}
        >
          {" "}
          Monday
        </li>

        <li
          className="list-group-item"
          key={"Tuesday"}
          onClick={() => handleClick("Tuesday")}
          style={{
            cursor: "pointer",
            backgroundColor:
              selected !== "Tuesday" ? " #008afb" : "transparent",
            color: selected === "Tuesday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Tuesday" ? 700 : 400,
          }}
        >
          {" "}
          Tuesday
        </li>

        <li
          className="list-group-item"
          key={"Wednesday"}
          onClick={() => handleClick("Wednesday")}
          style={{
            cursor: "pointer",
            backgroundColor:
              selected !== "Wednesday" ? " #008afb" : "transparent",
            color: selected === "Wednesday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Wednesday" ? 700 : 400,
          }}
        >
          {" "}
          Wednesday
        </li>

        <li
          className="list-group-item"
          key={"Thursday"}
          onClick={() => handleClick("Thursday")}
          style={{
            cursor: "pointer",
            backgroundColor:
              selected !== "Thursday" ? " #008afb" : "transparent",
            color: selected === "Thursday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Thursday" ? 700 : 400,
          }}
        >
          {" "}
          Thursday
        </li>

        <li
          className="list-group-item"
          key={"Friday"}
          onClick={() => handleClick("Friday")}
          style={{
            cursor: "pointer",
            backgroundColor: selected !== "Friday" ? " #008afb" : "transparent",
            color: selected === "Friday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Friday" ? 700 : 400,
          }}
        >
          {" "}
          Friday
        </li>

        <li
          className="list-group-item"
          key={"Saturday"}
          onClick={() => handleClick("Saturday")}
          style={{
            cursor: "pointer",
            backgroundColor:
              selected !== "Saturday" ? " #008afb" : "transparent",
            color: selected === "Saturday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Saturday" ? 700 : 400,
          }}
        >
          {" "}
          Saturday
        </li>

        <li
          className="list-group-item"
          key={"Sunday"}
          onClick={() => handleClick("Sunday")}
          style={{
            cursor: "pointer",
            backgroundColor: selected !== "Sunday" ? " #008afb" : "transparent",
            color: selected === "Sunday" ? "#00ff22" : "inherit",
            fontWeight: selected === "Sunday" ? 700 : 400,
          }}
        >
          {" "}
          Sunday
        </li>
      </ul>
    </aside>
  );
}

export default LeftBar;
