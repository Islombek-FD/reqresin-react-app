import React from 'react';
import './Users.scss';
import { useNavigate } from 'react-router-dom';

function Users() {
	const navigate = useNavigate();
	const [users, setUsers] = React.useState([]);
	const [page, setPage] = React.useState(1);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_APP_URL + '/users?page=' + page)
			.then((response) => response.json())
			.then((array) => setUsers(array.data));
	}, [page]);

	const handlePrevButton = (evt) => setPage(page - 1);
	const handleNextButton = () => setPage(page + 1);

	return (
		<>
			<div className='container'>
				<ul className='users__list'>
					{users &&
						users.map((user) => (
							<li key={user.id} className='user__item'>
								<img
									className='user__image'
									src={user.avatar}
									alt={`${user.first_name} ${user.last_name} rasmi`}
								/>
								<strong className='user__name'>
									{user.first_name} {user.last_name}
								</strong>

								<button
									className='user__button'
									onClick={() =>
										navigate('/users/' + user.id)
									}>
									More Info
								</button>
							</li>
						))}
				</ul>
				<div className='user__controlles-buttons'>
					<button
						className='user__controlles-button'
						onClick={handlePrevButton}
						disabled={page > 1 ? false : true}>
						Prev
					</button>
					<button
						className='user__controlles-button'
						onClick={handleNextButton}
						disabled={page < 2 ? false : true}>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Users;
