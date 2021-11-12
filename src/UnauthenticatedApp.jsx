import React from 'react';
import useToken from './Hooks/useToken.js';

function UnauthenticatedApp() {
	const [setToken] = useToken(true);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, password } = evt.target.elements;

		fetch(process.env.REACT_APP_APP_URL + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username.value.trim(),
				password: password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data.token));
	};

	return (
		<>
			<h2>Login</h2>

			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						defaultValue='eve.holt@reqres.in'
						placeholder='username'
						name='username'
					/>
				</div>

				<div>
					<input
						type='password'
						defaultValue='cityslicka'
						placeholder='password'
						name='password'
					/>
				</div>

				<button type='submit'>Log In</button>
			</form>
		</>
	);
}

export default UnauthenticatedApp;
