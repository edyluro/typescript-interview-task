// TODO: Implement better error handling
export const errorHandler = (response: Response) => {
	const error =
		response.status === 401
			? 'Unauthorized user. Please login to continue.'
			: 'Error while retrieving response';
	console.error(error);
};
