import React from "react";
import "./ScheduleCard.css";

export default function ScheduleCard(data) {
	let nameClass = data.nameClass; //"Science 7";  // DO NOT RENAME
	let teacher = data.teacher; //"Gallew";
	let time = data.time; //"10:00-11:56";
	let period = data.period; //"6";

	return (
		<div className="scheduleCard">
			<div className="leftScheduleCard">
				<p className="class">{nameClass}</p>
				<p className="time">{time}</p>
			</div>
			<div className="rightScheduleCard">
				<p className="teacher">{teacher}</p>
				<p className="period">{period}</p>
			</div>
		</div>
	);
}
