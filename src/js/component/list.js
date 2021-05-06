import React, { useState } from "react";
import Task from "./task.js";

const List = () => {
	const [newTask, setNewTask] = useState("");
	/*let myArray = [];
	function addNewTask() {
		return <div className="bg-white text-dark">{newTask}</div>;
	}*/

	return (
		<div className="bg-danger text-white p-4 col">
			<p>To Do List</p>
			<input
				type="text"
				placeholder="add a new task here and push enter"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setNewTask(event.target.value);
					}
				}}></input>
			<Task text={newTask} />
		</div>
	);
};

export default List;
