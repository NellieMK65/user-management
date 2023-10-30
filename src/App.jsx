import { useState } from 'react';
import UserForm from './components/UserForm';

function App() {
	const [users, setUsers] = useState([]);

	const handleSaveUser = (user) => {
		console.log(user);
	};

	const name = 'John Doe';

	return (
		<div className="container mt-5">
			<UserForm handleSaveUser={handleSaveUser} name={name} />
		</div>
	);
}

export default App;
