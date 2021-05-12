import React, { useState, useEffect } from "react";
import Task from "./task.js";

const ToDoList = () => {
	//const [newTask, setNewTask] = useState("");
	/*let myArray = [];
	function addNewTask() {
		return <div className="bg-white text-dark">{newTask}</div>;
	}*/
	const [list, setList] = useState([]);
	let listMap = "";

	useEffect(() => {
		listMap = list.map((task, index) => {
			return <li key={index.toString()}>{task}</li>;
		});
		console.log(listMap);
	}, [list]);

	return (
		<div className="bg-danger text-dark p-4 col">
			<p>To Do List</p>
			<input
				type="text"
				placeholder="add a new task here and push enter"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setList([...list, event.target.value]);
					}
				}}></input>
			<section>
				<ul>{listMap}</ul>
			</section>
		</div>
	);
};

export default ToDoList;
