import TaskList from "./components/tasks/TaskList.jsx";
import TaskForm from "./components/tasks/TaskForm.jsx";

function App() {
	return (
		<main
			className=" bg-gray-200 h-screen 
		 ">
			<section className="container mx-auto p-10">
				<TaskForm />
				<TaskList />
			</section>
		</main>
	);
}

export default App;
