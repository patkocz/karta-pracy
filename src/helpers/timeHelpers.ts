import moment from 'moment';
import { ITime } from '../core/interfaces';

export const calculateTime = (TStart?: ITime, TEnd?: ITime): ITime | undefined => {
	if (!TStart || !TEnd) {
		return;
	}
	const t1 = moment().set({
		'hour': TStart.hours,
		'minute': TStart.minutes
	});

	const t2 = moment().set({
		'hour': TEnd.hours,
		'minute': TEnd.minutes
	});


	const duration = moment.duration(t2.diff(t1));

	return {
		hours: duration.hours(),
		minutes: duration.minutes()
	}
}

export const parseTimeInput = (time: string): ITime | undefined => {
	const [h, m] = time.split(':');
	const hours = Number(h);
	const minutes = Number(m);

	if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
		return {
			hours: hours,
			minutes: minutes
		}
	}
}
