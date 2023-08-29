import classes from "./Converter.module.css";

const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];

const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
	<div className={classes.block}>
		<ul className={classes.currencies}>
			{defaultCurrencies.map((cur) => (
				<li
					onClick={() => onChangeCurrency(cur)}
					className={currency === cur ? classes.active : ""}
					key={cur}
				>
					{cur}
				</li>
			))}
		</ul>
		<input
			onChange={(e) => onChangeValue(e.target.value)}
			value={value}
			type="number"
			placeholder={0}
		/>
	</div>
);

export default Block;
