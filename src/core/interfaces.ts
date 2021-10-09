import { Timestamp } from '@firebase/firestore/dist/lite';
import { Hours, Minutes, Money } from './types';

interface IDeletedItem {
	isDeleted?: boolean;
	deletedAt?: Timestamp;
}

export interface IWorkCard extends IDeletedItem {
	date?: Date;
	customer?: ICustomer;
	timeStart?: ITime;
	timeEnd?: ITime;
	timeSum?: ITime;
	workDescription?: string;
	receipt?: Money;
	invoice?: Money;
	additionalCosts?: Money;
	employess?: Array<IEmployee>
	timestamp?: Date;
}

export interface ICustomer extends IDeletedItem {
	name: string;
	address?: IAddress;
}

export interface IAddress {
	city?: string;
	streetName?: string;
	streetNumber?: string;
	postalCode?: string;
}

export interface ITime {
	minutes: Minutes;
	hours: Hours;
}

export interface IEmployee extends IDeletedItem {
	firstName: string;
	lastName?: string;
	timeStart?: ITime;
	timeEnd?: ITime;
	timeSum?: ITime;
}

export interface IDataService {
	getAll(): any;
	getById(id: any): any;
	add(): void;
	update(): void;
	delete(): void;
}
