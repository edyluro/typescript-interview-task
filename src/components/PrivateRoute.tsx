import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Routes } from '~/constants';
import isLoggedIn from '~/utils/isLoggedIn';

const PrivateRoute: FC<RouteProps> = ({ component: Component, path }) => {
	return (
		<Route
			path={path}
			render={(routeProps) =>
				isLoggedIn() ? (
					<Component {...routeProps} />
				) : (
					<Redirect to={Routes.Login} />
				)
			}
		/>
	);
};

export default PrivateRoute;
