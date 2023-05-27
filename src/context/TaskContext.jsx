import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../components/data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	function createTask(taskTitle) {
		setTasks([
			...tasks,
			{
				title: taskTitle.title,
				id: tasks.length,
				description: taskTitle.description,
			},
		]);
	}

	function deleteTask(taskId) {
		setTasks(tasks.filter((task) => task.id !== taskId));
	}

	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				deleteTask,
				createTask,
			}}>
			{props.children}
		</TaskContext.Provider>
	);
}
