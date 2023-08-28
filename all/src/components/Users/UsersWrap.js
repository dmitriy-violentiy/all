import { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
const src = "https://reqres.in/api/users";
const UsersWrap = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get(src).then((data) => {
			setUsers(data.data.data);
		});
	}, []);

	return <Users users={users} />;
};

export default UsersWrap;
