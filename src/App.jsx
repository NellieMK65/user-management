import { useState } from 'react';
import UserForm from './components/UserForm';

function App() {
	const [users, setUsers] = useState([]);

	const handleSaveUser = (user) => {
		console.log(user);
	};

	return (
		<div className="container mt-5">
			<UserForm handleSaveUser={handleSaveUser} />
		</div>
	);
}

export default App;
