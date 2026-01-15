import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type MiddleProps = {
  text: string;
};

function Middle({ text }: MiddleProps) {
  const day = [
    ["mon", "mon", "mon", "addon Mon"],
    ["tue", "tue", "tue"],
    ["wed", "wed", "wed"],
    ["thu", "thu", "thu"],
    ["fri", "fri", "fri"],
    ["sat", "sat", "sat"],
    ["sun", "sun", "sun"],
  ];
  let dayInt = -1;
  let selectedDayTasks = [""];

  switch (text) {
    case "Monday":
      dayInt = 0;
      selectedDayTasks = day[dayInt];
      break;
    case "Tuesday":
      dayInt = 1;
      selectedDayTasks = day[dayInt];
      break;
    case "Wednesday":
      dayInt = 2;
      selectedDayTasks = day[dayInt];
      break;
    case "Thursday":
      dayInt = 3;
      selectedDayTasks = day[dayInt];
      break;
    case "Friday":
      dayInt = 4;
      selectedDayTasks = day[dayInt];
      break;
    case "Saturday":
      dayInt = 5;
      selectedDayTasks = day[dayInt];
      break;
    case "Sunday":
      dayInt = 6;
      selectedDayTasks = day[dayInt];
      break;
  }

  return (
    <aside className="middle">
      <h2>{text}</h2>
      <ul>
        {selectedDayTasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
