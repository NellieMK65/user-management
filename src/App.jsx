import { useState } from 'react';
import UserForm from './components/UserForm';

const BASE_URL = 'http://localhost:4000/users';

function App() {
	// useState hook allows us to work with dynamic data inside a component
	const [users, setUsers] = useState([]);

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

	return (
		<div className="container mt-5">
			<UserForm handleSaveUser={handleSaveUser} />
			<ol>
				{users.map((user) => (
					<li key={user.id}>{user.firstName}</li>
				))}
			</ol>
		</div>
	);
}

export default App;
