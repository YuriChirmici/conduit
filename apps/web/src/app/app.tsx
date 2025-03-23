import { useEffect, useState } from 'react';
import { axios } from '../api';

export function App() {
	const [ message, setMessage ] = useState<string>('Hello World');
	useEffect(() => {
		axios.get('/').then((response) => {
			setMessage(response.data.message);
		});
	});
	return (
		<div>
			{ message }
		</div>
	);
}

export default App;
