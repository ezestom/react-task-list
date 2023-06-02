import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { createTask } = useContext(TaskContext);

	const hundleSubmit = (e) => {
		e.preventDefault();
		if (title !== "" && description !== "") {
			createTask({ title, description });
			setTitle("");
			setDescription("");
		} else {
			alert("🚫 No puedes dejar campos vacios");
		}
	};

	return (
		<div className="max-w-md mx-auto rounded-md">
			<form
				onSubmit={hundleSubmit}
				className="bg-gray-300 m-2 p-10 mb-4 rounded-md">
				<h1 className="text-2xl font-bold mb-3">Crea tu tarea</h1>
				<input
					placeholder="Ecribe tu tarea"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					autoFocus
					className=" bg-gray-100 p-3 rounded-md  w-full mb-2"
				/>
				<textarea
					placeholder="Escribe la información de la tarea"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
					className=" bg-gray-100 p-3 rounded-md  w-full mb-2"></textarea>
				<button className="bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-400 hover:text-white">
					Guardar
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
