import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { InputOnChangeType, InputValueType } from '../../core/types';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import moment from 'moment';
// import { InputLabel, InputWrapper, StyledBorder, StyledInput } from './Common';

interface IProps {
	label?: string;
	Icon?: JSX.Element;
	id?: string;
	name?: string;
	value?: InputValueType;
	defaultValue?: InputValueType;
	onChange?: InputOnChangeType;
	type?: React.HTMLInputTypeAttribute;
};

// const StyledDatePicker = styled(DatePicker)`
// 	border: none;
// 	outline: none;
// `;

const StyledDatePicker = styled(MobileDatePicker)`
	/* border: none;
	outline: none; */
	width: 100%;
`;


interface ICalendarContainer {
	className?: string;
	children: React.ReactNode;
};

const CalendarContainerNew = (({ className, children }: ICalendarContainer) => {
	return (
		<CalendarContainer className={className}>
			{children}
		</CalendarContainer>
	)
});

const styledCalendarContainer = styled(CalendarContainerNew)`
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 240px;
`;

const DisplayDate = styled.span`
	font-size: 16px;
	display: flex;
	align-items: center;
`;

export const DateInput = ({ ...props }: IProps) => {
	const [startDate, setStartDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	const toggleOpen = () => setOpen(!open);

	const onDateChange = (date: any) => {
		if (date !== null && date instanceof Date) {
			setStartDate(date)
		}
	}

	return (
		<StyledDatePicker
			label="Data"
			value={startDate}
			onChange={onDateChange}
			renderInput={(params) => <TextField {...params} fullWidth />}
		/>
	);
};
