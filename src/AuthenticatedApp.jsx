import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Users from './Pages/Users/Users.jsx';
import UserSingle from './Pages/UserSingle/UserSingle.jsx';

function AuthenticatedApp() {
	return (
		<>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/users'>Users</NavLink>
				</li>
			</ul>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/users/' element={<Users />} />
				<Route path='/users/:id' element={<UserSingle />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
