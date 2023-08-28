import classes from "./Users.module.css";

const Users = (props) => {
	return (
		<div>
			<h2 className={classes.usersTitle}>
				Пользователи, полученный с помощью запроса:
			</h2>
			<div className={classes.usersWrap}>
				{props.users.map((el, id) => {
					return (
						<div key={id} className={classes.user}>
							<p>{el.first_name}</p>
							<p>{el.last_name}</p>
							<img src={el.avatar} key={id}></img>
							<span>{el.email}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Users;
