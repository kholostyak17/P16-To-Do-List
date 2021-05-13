import React, { useState, useEffect } from "react";
import Task from "./task.js";

const ToDoList = () => {
	//const [newTask, setNewTask] = useState("");
	/*let myArray = [];
	function addNewTask() {
		return <div className="bg-white text-dark">{newTask}</div>;
	}*/
	const [list, setList] = useState([]);
	const [listMap, setListMap] = useState("");

	useEffect(() => {
		setListMap(
			list.map((task, index) => {
				return (
					<li key={index.toString()}>
						<span>{task}</span>
						<button
							className="delete"
							onClick={() => {
								deleteTask(index);
							}}>
							X
						</button>
					</li>
				);
			})
		);
		console.log(listMap);
	}, [list]);

	const deleteTask = indexDelete => {
		setList(list.filter((_, index) => index != indexDelete));
		/* CUIDADO CON METER ENTRE LLAVES LO QUE HAY EN LA
        ARROW FUNCT DEL FILTER!!!!!!!!!!!!!!!!!!!!!!!!!*/
	};

	return (
		<div className="notepad bg-warning text-dark p-4 col">
			<p>To Do List</p>
			<input
				type="text"
				placeholder="add a new task here and push enter"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setList([...list, event.target.value]);
						event.target.value = "";
					}
				}}></input>
			<section>
				<ul>{listMap}</ul>
			</section>
		</div>
	);
};

export default ToDoList;
