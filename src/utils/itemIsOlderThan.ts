import moment from 'moment';
import { IItem } from '~/services/getUserItems';

const itemIsOlderThan = (
	item: IItem,
	comparatorValue: number,
	unitOfTime: moment.unitOfTime.Diff = 'days'
) => {
	const today = moment();
	const createdDate = moment(item.createdAt);

	return today.diff(createdDate, unitOfTime) > comparatorValue;
};

export default itemIsOlderThan;
