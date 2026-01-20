// The Luxon library doesn't have a way to format numbered days ending in suffixes (st, nd, rd, and th), 
// so we'll need to do this ourselves with the ordinalDay() utility function. It takes a day argument 
// and returns the corresponding ordinal suffix.

// To get this numbered day, we need to create a DateTime instance. DateTime is one of the most important 
// classes when working with Luxon, as it is used to represent our dates from which we convert into other 
// formats. A DateTime represents a specific time and day, consisting of a timestamp as well as a timezone. 
// If no timezone is specified, it will use your system's timezone — which is why we specify { zone: 'utc' } 
// when creating one. There are many ways you can create a DateTime, but in this case we use is DateTime.fromISO() 
// as our date is already in ISO format. To extract the numbered day from our DateTime, we need to access 
// the day field. Then, to create our custom date format, we use the toFormat() method.

import { DateTime } from 'luxon';

const ordinalDay = (day) => {
	return day > 0 // If day is greater than 0, evaluate suffix. Otherwise, return an empty string.
		? ['th', 'st', 'nd', 'rd'][
				// If day is between 4-20 OR its remainder is greater than 3, use the ordinal suffix at index = 0 ('th').
				// Otherwise, use the ordinal suffix at index = remainder (1 = 'st', 2 = 'nd', or 3 = 'rd').
				(day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10
			]
		: '';
};

export const dateFilter = (value) => {
	const dateObj = DateTime.fromISO(value, { zone: 'utc' });

	return dateObj.toFormat(
		`d'${ordinalDay(dateObj.day)} of' MMMM yyyy`,
	);
};
