import { API } from '~/constants';
import { getUrl } from '~/utils';

const logout = async () => {
	const url = getUrl(API.Logout);

	await fetch(url, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	localStorage.removeItem('token');
};

export default logout;
