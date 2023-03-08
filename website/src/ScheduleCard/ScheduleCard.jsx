import React from "react";

export default function ScheduleCard(data) {
	let nameClass = "Science 7"; //data.class; // DO NOT RENAME
	let teacher = "Gallew"; //data.teacher;
	let time = "10:00-11:56"; //data.time;
	let period = "6"; //data.period;

	return (
		<div>
			<p className="class">{nameClass}</p>
			<p className="teacher">{teacher}</p>
			<p className="time">{time}</p>
			<p className="period">{period}</p>
		</div>
	);
}
