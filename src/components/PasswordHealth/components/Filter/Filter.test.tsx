import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { DefaultValues } from '~/constants';
import Filter from './Filter';

const items = [
	{
		id: '000',
		title: 'discord',
		description: 'rumors',
		password: 'discordPassword123.',
		createdAt: moment().toISOString(),
	},
	{
		id: '010',
		title: 'Nintendo',
		description: 'Lets play',
		password: 'Password123~',
		createdAt: moment()
			.subtract(DefaultValues.DaysOld + 1, 'days')
			.toISOString(),
	},
	{
		id: '001',
		title: 'airdroid',
		description: 'replace android',
		password: 'pass1',
		createdAt: moment().toISOString(),
	},
	{
		id: '002',
		title: 'ios',
		description: 'replace ios',
		password: 'pass1',
		createdAt: moment().toISOString(),
	},
];

jest.mock('react-router-dom', () => {
	return {
		useHistory: jest.fn(() => {
			return { push: jest.fn() };
		}),
	};
});

test('Should render the Filter Tabs', () => {
	render(<Filter items={items} />);
	const weakTab = screen.getByText(/(Weak) \(\d\)/);
	expect(weakTab).toBeInTheDocument();

	const reusedTab = screen.getByText(/(Reused) \(\d\)/);
	expect(reusedTab).toBeInTheDocument();

	const oldTab = screen.getByText(/(Old) \(\d\)/);
	expect(oldTab).toBeInTheDocument();
});
