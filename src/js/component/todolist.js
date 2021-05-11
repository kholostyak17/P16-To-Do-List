import React, { useState } from "react";
import Task from "./task.js";

const ToDoList = () => {
	//const [newTask, setNewTask] = useState("");
	/*let myArray = [];
	function addNewTask() {
		return <div className="bg-white text-dark">{newTask}</div>;
	}*/
	const [list, setList] = useState([]);
	//let listMap = list.map(() => {});

	return (
		<div className="bg-danger text-white p-4 col">
			<p>To Do List</p>
			<input
				type="text"
				placeholder="add a new task here and push enter"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setList(...list, event.target.value);
						console.log(list);
					}
				}}></input>
			<section>
				<ul></ul>
			</section>
		</div>
	);
};

export default ToDoList;
