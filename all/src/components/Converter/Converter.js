import React, { useEffect, useRef, useState } from "react";
import classes from "./Converter.module.css";
import Block from "./Block";
import axios from "axios";

const Converter = () => {
	const [fromCurrency, setFromCurrency] = useState("RUB");
	const [toCurrency, setToCurrency] = useState("USD");
	const [fromPrice, setFromPrice] = useState(0);
	const [toPrice, setToPrice] = useState(1);

	const ratesRef = useRef({});

	useEffect(() => {
		const rates = {
			RUB: 60,
			USD: 20,
			EUR: 55,
			GBP: 12,
		};
		/* setRates(rates); */
		ratesRef.current = rates;
		onChangeToPrice(1);
	}, []);

	const onChangeFromPrice = (value) => {
		const price = value / ratesRef.current[fromCurrency];
		const result = price * ratesRef.current[toCurrency];
		setToPrice(result.toFixed(3));
		setFromPrice(value);
	};

	const onChangeToPrice = (value) => {
		const result =
			(ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
		setFromPrice(result.toFixed(3));
		setToPrice(value);
	};

	const onChangeFromCurrency = (cur) => {
		setFromCurrency(cur);
		onChangeFromPrice(fromPrice);
	};

	useEffect(() => {
		onChangeFromPrice(fromPrice);
	}, [fromCurrency]);

	useEffect(() => {
		onChangeToPrice(toPrice);
	}, [toCurrency]);

	return (
		<div className={classes.converter}>
			<Block
				value={fromPrice}
				currency={fromCurrency}
				onChangeCurrency={onChangeFromCurrency}
				onChangeValue={onChangeFromPrice}
			/>
			<Block
				value={toPrice}
				currency={toCurrency}
				onChangeCurrency={setToCurrency}
				onChangeValue={onChangeToPrice}
			/>
		</div>
	);
};

export default Converter;
