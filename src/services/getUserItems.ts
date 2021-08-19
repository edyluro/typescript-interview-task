import { API } from '~/constants';
import { errorHandler } from '~/utils/errorHandler';
import getUrl from '~/utils/getUrl';

export interface IItem {
	id: string;
	title: string;
	description: string;
	password: string;
	createdAt: string;
}

const getUserItems = async (userId?: string): Promise<Array<IItem>> => {
	const url = getUrl(API.Items, {
		userId,
	});

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	if (!response.ok) {
		errorHandler(response);
		return [];
	}

	const data = await response.json();

	return data.items;
};

export default getUserItems;
