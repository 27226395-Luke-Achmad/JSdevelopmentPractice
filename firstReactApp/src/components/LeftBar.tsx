import { useState } from "react";

type SidebarProps = {
  setDaySelected: (day: string) => void; // To send the day selection to App.tsx
};

function LeftBar({ setDaySelected }: SidebarProps) {
  const [dayClicked, setDayClicked] = useState("");

  const handleClick = (day: string) => {
    setDayClicked(day); // Update local state for local styling
    console.log(`${day} selected`); // For Testing Purposes
    setDaySelected(day); // Sends the selected day to App.tsx
  };

  const daysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // Below creates the visible Day list with the click handler and dynamic styling
  return (
    <aside className="leftbar">
      <h2>WeekDays</h2>
      <ul className="list-group">
        {daysArray.map((day) => {
          const isSelected = dayClicked === day;

          return (
            <li
              key={day}
              className="list-group-item"
              onClick={() => handleClick(day)}
              style={{
                cursor: "pointer",
                backgroundColor: isSelected ? "inherit" : "transparent",
                color: isSelected ? "Gold" : "inherit",
                fontWeight: isSelected ? 700 : 400,
              }}
            >
              {day}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default LeftBar;
