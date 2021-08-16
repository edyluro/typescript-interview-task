import { Route, Switch } from 'react-router-dom';

import useItemsProvider from './useItemsProvider';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import ErrorBlock from '../ErrorBlock';
import LoadingScreen from '../LoadingScreen';
import { useUserContext } from '../UserContext';
import { DefaultValues, Routes } from '~/constants';
import itemHasWeakPassword from '~/utils/itemHasWeakPassword';
import itemHasReusedPassword from '~/utils/itemHasReusedPassword';
import itemIsOlderThan from '~/utils/itemIsOlderThan';

const PasswordHealth = () => {
	const {
		errorMessage: userProviderErrorMessage,
		isLoading: userDataIsLoading,
		username,
	} = useUserContext();

	const { items, isLoading, errorMessage } = useItemsProvider();

	if (isLoading || userDataIsLoading) {
		return <LoadingScreen />;
	}

	if (userProviderErrorMessage || errorMessage) {
		return <ErrorBlock error={userProviderErrorMessage || errorMessage} />;
	}

	return (
		<div className='container'>
			<Header items={items} username={username} />
			<Filter items={items} />
			<Switch>
				<Route exact path={Routes.PasswordHealth}>
					<List items={items} />
				</Route>
				<Route path={Routes.Weak}>
					<List items={items.filter(itemHasWeakPassword)} />
				</Route>
				<Route path={Routes.Reused}>
					<List
						items={items.filter((item) => itemHasReusedPassword(item, items))}
					/>
				</Route>
				<Route path={Routes.Old}>
					<List
						items={items.filter((item) =>
							itemIsOlderThan(item, DefaultValues.DaysOld)
						)}
					/>
				</Route>
			</Switch>
		</div>
	);
};

export default PasswordHealth;
