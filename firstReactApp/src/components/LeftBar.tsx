import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type SidebarProps = {
  setDay: (day: string) => void;
};

function LeftBar({ setDay }: SidebarProps) {
  const [clickDay, setClickeday] = useState("");

  const handleClick = (day: string) => {
    setClickeday(day);
    console.log(`${day} selected`);
    setDay(day);
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
            backgroundColor: clickDay !== "Monday" ? "Grey" : "inherit",
            color: clickDay === "Monday" ? "silver" : "inherit",
            fontWeight: clickDay === "Monday" ? 700 : 400,
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
              clickDay !== "Tuesday" ? "grey" : "inherit",
            color: clickDay === "Tuesday" ? "silver" : "inherit",
            fontWeight: clickDay === "Tuesday" ? 700 : 400,
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
              clickDay !== "Wednesday" ? "grey" : "inherit",
            color: clickDay === "Wednesday" ? "silver" : "inherit",
            fontWeight: clickDay === "Wednesday" ? 700 : 400,
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
              clickDay !== "Thursday" ? "grey" : "inherit",
            color: clickDay === "Thursday" ? "silver" : "inherit",
            fontWeight: clickDay === "Thursday" ? 700 : 400,
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
            backgroundColor: clickDay !== "Friday" ? " grey" : "inherit",
            color: clickDay === "Friday" ? "silver" : "inherit",
            fontWeight: clickDay === "Friday" ? 700 : 400,
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
              clickDay !== "Saturday" ? "grey" : "inherit",
            color: clickDay === "Saturday" ? "silver" : "inherit",
            fontWeight: clickDay === "Saturday" ? 700 : 400,
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
            backgroundColor: clickDay !== "Sunday" ? "grey" : "inherit",
            color: clickDay === "Sunday" ? "silver" : "inherit",
            fontWeight: clickDay === "Sunday" ? 700 : 400,
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
