import { API } from '~/constants';
import { getUrl } from '~/utils';

const login = async (username: string, password: string) => {
	const url = getUrl(API.Login, {
		username,
		password,
	});

	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();
		const { token } = data;

		localStorage.setItem('token', token);
	} else {
		throw Error('Incorrect username or password.');
	}
};

export default login;
