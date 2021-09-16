import { Address, PlnCurrency, Time, WorkDescription } from "./types";

export interface IWorkCard {
  date?: Date;
  address?: Address;
  timeStart?: Time;
  timeEnd?: Time;
  timeSum?: Time;
  workDescription?: WorkDescription;
  receipt?: PlnCurrency;
  invoice?: PlnCurrency;
  AdditionalCosts?: PlnCurrency;
  employees?: Array<IEmployee>;
}

export interface IEmployee {
  name?: string;
  timeStart?: Time;
  timeEnd?: Time;
  timeSum?: Time;
}
