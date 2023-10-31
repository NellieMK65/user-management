import { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';

import UserForm from './components/UserForm';
import UserList from './components/UserList';

const BASE_URL = 'http://localhost:4000/users';

function App() {
	// useState hook allows us to work with dynamic data inside a component
	const [users, setUsers] = useState([]);
	const [input, setInput] = useState('');

	// save user to db.json
	const handleSaveUser = (user) => {
		fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => setUsers([...users, data]))
			.catch((err) => console.log(err));
	};

	/**
	 * useEffect allows us to add extra effects to a component i.e
	 * 1. Fetch data from an api
	 * 2. Manually manipulating the DOM
	 */
	// 1. Runs every time the state/props change
	// useEffect(() => {
	// 	console.log('Can be executed');
	// });

	//2. Executed only once when the component is rendered
	// useEffect(() => {
	// 	console.log('Running');
	// }, []);

	// 3. Runs after the component renders and every time the dependancy changes
	// useEffect(() => {
	// 	console.log('Input: ', input);
	// }, [input]);

	// Fetch users from db.json
	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			// once we get the data from db.json we store inside the state
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container mt-5">
			<Stack gap={3}>
				<UserForm handleSaveUser={handleSaveUser} />

				<hr />

				<UserList users={users} />
			</Stack>

			{/* <input type="text" onChange={(e) => setInput(e.target.value)} /> */}
		</div>
	);
}

export default App;
