import { API } from '~/constants';
import { errorHandler } from '~/utils/errorHandler';
import getUrl from '~/utils/getUrl';

const userErrorHandler = (response: Response) => {
	localStorage.removeItem('token');
	errorHandler(response);
}

const getUser = async () => {
	const response = await fetch(getUrl(API.User), {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response.ok) {
		userErrorHandler(response);
		return null;
	}
	return response.json();
};

export default getUser;
