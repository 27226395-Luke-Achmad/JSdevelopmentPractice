import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type TaskAreaProps = {
  daySelected: string;
  taskSelected: string;
  setTaskSelected: (text: string) => void;
  userInput: string;
};

function TaskArea({
  daySelected,
  userInput,
  taskSelected,
  setTaskSelected,
}: TaskAreaProps) {
  let taskIndex = -1;
  let heading = "No Day Selected";
  const [dayList, setDayList] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  //This state holds the tasks for each day of the week
  let dayIndex = -1; // Tracks the array index that should currently be displayed
  const [clickedTask, setClickedTask] = useState("");

  const handleClick = (task: string) => {
    setClickedTask(task);
    console.log(`${task} selected`);
    setTaskSelected(task);
  };

  switch (
    daySelected // Used to set the dayIndex based on the selected day and sets the heading for the tasks area
  ) {
    case "Monday":
      dayIndex = 0;
      heading = "Tasks for Monday:";
      break;
    case "Tuesday":
      dayIndex = 1;
      heading = "Tasks for Tuesday:";
      break;
    case "Wednesday":
      dayIndex = 2;
      heading = "Tasks for Wednesday:";
      break;
    case "Thursday":
      dayIndex = 3;
      heading = "Tasks for Thursday:";
      break;
    case "Friday":
      dayIndex = 4;
      heading = "Tasks for Friday:";
      break;
    case "Saturday":
      dayIndex = 5;
      heading = "Tasks for Saturday:";
      break;
    case "Sunday":
      dayIndex = 6;
      heading = "Tasks for Sunday:";
      break;
    default:
      dayIndex = -1;
      heading = "No Day Selected";
      break;
  }

  // Used to confirm there is a task selected and present before fetching its index
  if (dayIndex !== -1 && taskSelected.length !== 0) {
    if (dayList[dayIndex].includes(taskSelected)) {
      taskIndex = dayList[dayIndex].indexOf(taskSelected);
    } else {
      taskIndex = -1;
    }
    console.log(`TaskArea: taskIndex for ${taskSelected} is ${taskIndex}`);
  }

  const addToDay = (dayIndex: number, userInput: string) => {
    setDayList((prev) =>
      prev.map((day, i) => (i === dayIndex ? [...day, userInput] : day)),
    );
  };

  const deleteWord = (dayIndex: number, taskIndex: number) => {
    setDayList((prev) =>
      prev.map((day, i) =>
        i === dayIndex ? day.filter((_, idx) => idx !== taskIndex) : day,
      ),
    );
  };

  const handleTaskAddition = () => {
    if (dayIndex !== -1 && userInput.length > 0) {
      addToDay(dayIndex, userInput);
    }
  };

  const handleTaskDeletion = () => {
    if (dayIndex !== -1 && taskIndex !== -1) {
      deleteWord(dayIndex, taskIndex);
    }
  };

  return (
    <aside className="taskarea">
      <h2>{heading}</h2>
      {dayIndex !== -1 &&
        dayList[dayIndex].map((item) => (
          <li onClick={() => handleClick(item)} style={{ cursor: "pointer" }}>
            <input type="checkbox" />
            {" " + item}
          </li>
        ))}
      <button className="addbutton" onClick={handleTaskAddition}>
        Add Task
      </button>
      <button className="deletebutton" onClick={handleTaskDeletion}>
        Delete Task
      </button>
    </aside>
  );
}

export default TaskArea;
