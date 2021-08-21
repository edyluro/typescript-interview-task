import moment from 'moment';
import { DefaultValues } from '../../constants';
import { itemIsOlderThan } from '~/utils';

const items = [
	{
		id: '000',
		title: 'discord',
		description: 'rumors',
		password: 'discordPassword123.',
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
		id: '010',
		title: 'Nintendo',
		description: 'Lets play',
		password: 'pass1',
		createdAt: moment().subtract(DefaultValues.DaysOld, 'days').toISOString(),
	},
];

test('should return true only if the createdAt date of the item is greater than the Default number of days', () => {
	expect(itemIsOlderThan(items[0], DefaultValues.DaysOld)).toBe(true);
	expect(itemIsOlderThan(items[1], DefaultValues.DaysOld)).toBe(false);
	expect(itemIsOlderThan(items[2], DefaultValues.DaysOld)).toBe(false);
});
