import { useState } from "react";
import classes from "./Quiz.module.css";

const Quiz = () => {
	const questions = [
		{
			title: "React - это ... ?",
			variants: ["библиотека", "фреймворк", "приложение"],
			correct: 0,
		},
		{
			title: "Компонент - это ... ",
			variants: [
				"приложение",
				"часть приложения или страницы",
				"то, что я не знаю что такое",
			],
			correct: 1,
		},
		{
			title: "Что такое JSX?",
			variants: [
				"Это простой HTML",
				"Это функция",
				"Это тот же HTML, но с возможностью выполнять JS-код",
			],
			correct: 2,
		},
		{
			title: "Какой сейчас год?",
			variants: ["2020", "2021", "2022", "2023"],
			correct: 3,
		},
	];

	function Result(props) {
		return (
			<div className={classes.result}>
				<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
				<h2>
					Вы отгадали {props.correct} ответа из {props.questions.length}
				</h2>
				<a href="/">
					<button>Попробовать снова</button>
				</a>
			</div>
		);
	}

	function Game(props) {
		const percentage = Math.round((step / questions.length) * 100);

		return (
			<>
				<div className={classes.progress}>
					<div
						style={{ width: percentage + "%" }}
						className={classes.progress__inner}
					></div>
				</div>
				<h1>{props.question.title}</h1>
				<ul>
					{question.variants.map((text, index) => (
						<li onClick={() => props.onClickvariant(index)} key={text}>
							{text}
						</li>
					))}
				</ul>
			</>
		);
	}

	const [step, setStep] = useState(0);
	const [correct, setCorrect] = useState(0);
	const question = questions[step];

	const onClickvariant = (index) => {
		setStep(step + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div>
			{step !== questions.length ? (
				<Game step={step} question={question} onClickvariant={onClickvariant} />
			) : (
				<Result correct={correct} questions={questions} />
			)}
		</div>
	);
};

export default Quiz;
