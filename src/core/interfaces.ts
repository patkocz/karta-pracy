import { Timestamp } from '@firebase/firestore/dist/lite';
import { Hours, Minutes, Money } from './types';

interface IDeletedItem {
	isDeleted?: boolean;
	deletedAt?: Timestamp;
}

export interface IWorkCard extends IDeletedItem {
	id?: string;
	date?: Date;
	customer?: ICustomer;
	timeStart?: ITime;
	timeEnd?: ITime;
	timeSum?: ITime;
	workDescription?: string;
	receipt?: Money;
	invoice?: Money;
	additionalCosts?: Money;
	employess?: Array<IWorkCardEmployee>
	timestamp?: Date;
}

export interface ICustomer extends IDeletedItem {
	id?: string;
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
	timestamp?: Date;
	id?: string;
}

export interface IWorkCardEmployee extends IEmployee {
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

export interface IAppState {
	workCards?: IWorkCard;
	customers?: ICustomer;
	employees?: IEmployee;
}
