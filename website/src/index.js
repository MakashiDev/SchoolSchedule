import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ScheduleCard from "./ScheduleCard/ScheduleCard";

const name = "Christian"; // Burner name

const root = ReactDOM.createRoot(document.getElementById("root"));

const day = new Date().getDay();
let today = "Normal";
if (day === 4) {
	today = "Thursday Block";
} else if (day === 5) {
	today = "Friday Block";
} else if ((day === 6) | (day === 0)) {
	today = "Weekend";
}

const hours = new Date().getHours();
let time;
if (hours < 12) {
	time = "Morning";
} else if (hours < 17) {
	time = "Afternoon";
} else {
	time = "Evening";
}

root.render(
	<div>
		<h1 className="welcome">
			Good {time} {name}
		</h1>
		<h2 className="day">
			{today}
			Schedule
		</h2>
		<div className="Schedule">
			<ScheduleCard
				nameClass="Science 7"
				teacher="Gallew"
				time="10:00-11:26"
				period="6"
			/>
			<ScheduleCard
				nameClass="A Lunch"
				teacher=""
				time="11:26-11:56"
				period=""
			/>
		</div>
	</div>
);
