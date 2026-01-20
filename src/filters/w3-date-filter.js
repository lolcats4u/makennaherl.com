// This one is straightforward. Because the HTML <time> element accepts an ISO formatted date for the datetime attribute, all we need to do is convert the DateTime object to a string for formatting.
import { DateTime } from 'luxon';

export const w3DateFilter = (value) => {
	return DateTime.fromISO(value, { zone: 'utc' }).toString();
};
