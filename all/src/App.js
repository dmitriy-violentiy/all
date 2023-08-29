import "./index.css";
import Count from "./components/Count/Count";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";
import UsersWrap from "./components/Users/UsersWrap";
import Converter from "./components/Converter/Converter";

function App() {
	return (
		<div className="App">
			<Count />
			<Modal />
			<Quiz />
			<UsersWrap />
			<Converter />
		</div>
	);
}

export default App;
