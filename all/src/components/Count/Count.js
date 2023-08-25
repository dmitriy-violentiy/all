import { useState } from "react";
import classes from "./Count.module.css";

const Count = () => {
	const [count, setCount] = useState(0);
	const countPlus = () => {
		setCount(count + 1);
	};
	const countMinus = () => {
		setCount(count - 1);
	};
	return (
		<div className={classes.count}>
			<h2>Счетчик:</h2>
			<h1>{count}</h1>
			<button onClick={countMinus}>-1</button>
			<button onClick={countPlus}>+1</button>
		</div>
	);
};

export default Count;
