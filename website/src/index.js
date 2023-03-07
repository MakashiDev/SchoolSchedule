import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const name = "Christian";

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
		<h2 className="day">{today} Schedule</h2>
	</div>
);
