/**
 * Must start with a capital letter
 * Must return one parent element
 * Use single responsibility principle
 */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// props desctructuring
const UserForm = (props) => {
	const { handleSaveUser } = props;

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		age: '',
	});

	const handleFormData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSaveForm = (e) => {
		// prevents the default form behaviour of reloading
		e.preventDefault();
		// pass the user object as an argument back to parent component
		handleSaveUser(formData);
	};

	return (
		<form onSubmit={handleSaveForm}>
			<Stack direction="horizontal" gap={3}>
				<Form.Control
					className="me-auto"
					placeholder="First name"
					name="firstName"
					required
					value={formData['firstName']}
					onChange={handleFormData}
				/>
				<Form.Control
					className="me-auto"
					placeholder="Last name"
					name="lastName"
					required
					value={formData['lastName']}
					onChange={handleFormData}
				/>
				<Form.Control
					className="me-auto"
					placeholder="Age"
					name="age"
					type="number"
					required
					value={formData['age']}
					onChange={handleFormData}
				/>
				<Button variant="secondary" type="submit">
					Submit
				</Button>
				<div className="vr" />
				<Button variant="outline-danger" type="reset">
					Reset
				</Button>
			</Stack>
		</form>
	);
};

export default UserForm;
