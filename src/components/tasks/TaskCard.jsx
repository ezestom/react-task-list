import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-gray-100 p-4 rounded-md">
			<h1 className=" text-xl font-bold capitalize">{task.title}</h1>
			<p className="text-sm ">{task.description}</p>
			<button
				className=" text-white hover:text-red-200 hover:bg-red-500 bg-red-400 py-1 px-2 rounded-md mt-5"
				onClick={() => {
					deleteTask(task.id);
				}}>
				Eliminar tarea
			</button>
		</div>
	);
}

export default TaskCard;
