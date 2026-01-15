import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type MiddleProps = {
  text: string;
};

function Middle({ text }: MiddleProps) {
  const day = [
    ["mon", "mon", "mon"],
    ["tue", "tue", "tue"],
    ["wed", "wed", "wed"],
    ["thu", "thu", "thu"],
    ["fri", "fri", "fri"],
    ["sat", "sat", "sat"],
    ["sun", "sun", "sun"],
  ];
  let dayInt = -1;

  switch (text) {
    case "Monday":
      dayInt = 0;
    case "Tuesday":
      dayInt = 1;
    case "Wednesday":
      dayInt = 2;
    case "Thursday":
      dayInt = 3;
    case "Friday":
      dayInt = 4;
    case "Saturday":
      dayInt = 5;
    case "Sunday":
      dayInt = 6;
    default:
      dayInt = 0;
  }

  day.map((day) => console.log(day[dayInt]));

  return (
    <aside className="middle">
      <h2>Monday</h2> /* Change this so that it is dynamic to the day*/
      <ul className="middle">
        <li
          className="list-day-tasks"
          key={"task0"}
          style={{
            cursor: "pointer",
            backgroundColor: " #003765",
            color: "#ffffff",
          }}
        >
          {" "}
          day[dayInt][0]
        </li>

        <li
          className="list-day-tasks"
          key={"task2"}
          style={{
            cursor: "pointer",
            backgroundColor: " #003765",
            color: "#ffffff",
          }}
        >
          {" "}
          day[dayInt][1]
        </li>

        <li
          className="list-day-tasks"
          key={"task3"}
          style={{
            cursor: "pointer",
            backgroundColor: " #003765",
            color: "#ffffff",
          }}
        >
          {" "}
          day[dayInt][2]
        </li>

        <li
          className="list-day-tasks"
          key={"task4"}
          style={{
            cursor: "pointer",
            backgroundColor: " #003765",
            color: "#ffffff",
          }}
        >
          {" "}
          day[dayInt][3]
        </li>
      </ul>
    </aside>
  );
}

export default Middle;

/*
The array storing the ToDo's will go here.

I still need to separate the day task display from the 2d array 
so I can display in the jsx concisely and with dynamic task count.

Add on-click behavior to trigger the textbox for editing of tasks.
*/
