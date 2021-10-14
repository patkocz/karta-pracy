import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { InputOnChangeType, InputValueType } from '../../core/types';
import { InputLabel, InputWrapper, StyledBorder, StyledInput } from './Common';

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

const StyledDatePicker = styled(DatePicker)`
	border: none;
	outline: none;
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
		<InputWrapper onClick={toggleOpen}>
			<InputLabel>Data</InputLabel>
			<StyledBorder>
				<CalendarTodayIcon />
				<span>{moment(startDate).format("DD/MM/YYYY")}</span>
				{open && (
					<StyledDatePicker
						selected={startDate}
						onChange={onDateChange}
						inline
					/>
				)}

			</StyledBorder>
		</InputWrapper>
	);
};
