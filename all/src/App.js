import "./App.css";
import Count from "./components/Count/Count";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";

function App() {
	return (
		<div className="App">
			<Count />
			<Modal />
			<Quiz />
		</div>
	);
}

export default App;
