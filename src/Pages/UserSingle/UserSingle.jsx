import React from 'react';
import './UserSingle.scss';
import { useParams, useNavigate } from 'react-router-dom';

function UserSingle() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = React.useState({});

	React.useEffect(() => {
		fetch(process.env.REACT_APP_APP_URL + '/users/' + id)
			.then((response) => response.json())
			.then((object) => setUser(object.data));
	}, [id]);

	return (
		<>
			<div className='container'>
				<h3 className='heading'>User Single Page</h3>

				{user && (
					<div className='selected__user'>
						<img
							className='selected__user-image'
							src={user.avatar}
							alt='User rasmi'
						/>
						<strong className='selected__user-name'>
							{user.first_name}&nbsp;{user.last_name}
						</strong>
						<a
							className='selected__user-email'
							href={`mailto: ${user.email}`}>
							{user.email}
						</a>
					</div>
				)}
				<button
					className='backword__button'
					onClick={() => navigate(-1)}>
					Backword
				</button>
			</div>
		</>
	);
}

export default UserSingle;
