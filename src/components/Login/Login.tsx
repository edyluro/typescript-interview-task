import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import login from '~/services/login';
import ErrorBlock from '../ErrorBlock/ErrorBlock';

import './login-style.scss';

const Login = () => {
	const { push } = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState<string>();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		setErrorMessage(null);

		try {
			await login(username, password);
			push(Routes.PasswordHealth);
		} catch (error) {
			setErrorMessage(error.message);
			setIsLoading(false);
		}
	};

	return (
		<div className='login-page'>
			<form className='login-form' onSubmit={handleSubmit}>
				<h1 className='text-center'>Password Health</h1>
				<ErrorBlock error={errorMessage} />
				<input
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					placeholder='Username'
					type='text'
					className='input mt-52px'
				/>
				<input
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					placeholder='Password'
					type='password'
					className='input mt-24px'
				/>
				<button type='submit' className='button mt-24px' disabled={isLoading}>
					{isLoading ? 'Logging in...' : 'Login'}
				</button>
			</form>
		</div>
	);
};

export default Login;
