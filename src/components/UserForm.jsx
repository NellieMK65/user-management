/**
 * Must start with a capital letter
 * Must return one parent element
 * Use single responsibility principle
 */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// props desctructuring
const UserForm = (props) => {
	console.log(props);
	return (
		<Stack direction="horizontal" gap={3}>
			<Form.Control
				className="me-auto"
				placeholder="Add your item here..."
			/>
			<Form.Control
				className="me-auto"
				placeholder="Add your item here..."
			/>
			<Button
				variant="secondary"
				// onClick={() => handleSaveUser({ firstName: 'John' })}
			>
				Submit
			</Button>
			<div className="vr" />
			<Button variant="outline-danger">Reset</Button>
		</Stack>
	);
};

export default UserForm;
