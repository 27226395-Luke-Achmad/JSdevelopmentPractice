import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type MiddleProps = {
  day: string;
  setTaskSelected: (text: string) => void;
  taskSelected: string;
  userInput: string;
};

function Middle({
  day,
  userInput,
  taskSelected,
  setTaskSelected,
}: MiddleProps) {
  const dayList = [
    ["m1", "m2", "m3", "addon for Mon"],
    ["tu1", "tu2", "tu3"],
    ["w1", "w2", "w3 "],
    ["th1", "th2", "th3"],
    ["f1", "f2", "f3"],
    ["sa1", "sa2", "sa3"],
    ["su1", "su2", "su3", "su4", "su5", "su6"],
  ];

  let dayInt = -1;
  let selectedDayTasks = [""];
  let heading = "No Day Selected";
  const [clickedTask, setClickedTask] = useState("");

  const handleClick = (task: string) => {
    setClickedTask(task);
    console.log(`${task} selected`);
    setTaskSelected(task);
    /*if (userInput.length > 0) {
    dayList[dayInt][taskSelected];
    }*/

    //Finish adding the array elemnt switch, last tab in chat gpt has some tips
  };
  const allowed = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (allowed.includes(day)) {
    heading = "Tasks for\n" + day;
  }
  switch (day) {
    case "Monday":
      dayInt = 0;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Tuesday":
      dayInt = 1;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Wednesday":
      dayInt = 2;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Thursday":
      dayInt = 3;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Friday":
      dayInt = 4;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Saturday":
      dayInt = 5;
      selectedDayTasks = dayList[dayInt];
      break;
    case "Sunday":
      dayInt = 6;
      selectedDayTasks = dayList[dayInt];
      break;
    default:
      selectedDayTasks = ["NO DAY SELECTED"];
  }

  return (
    <aside className="middle">
      <ul className="task-list-group">
        <h2>{heading}</h2>
        {selectedDayTasks.map((item) => (
          <li onClick={() => handleClick(item)} style={{ cursor: "pointer" }}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Middle;

/*
Implement dynamic task count and user input for tasks.

Add on-click behavior to trigger the textbox for editing of tasks.
*/
