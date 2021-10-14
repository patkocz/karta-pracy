import HourglassBottom from '@mui/icons-material/HourglassBottom';
import HourglassFull from '@mui/icons-material/HourglassFull';
import HourglassTop from '@mui/icons-material/HourglassTop';
import React from 'react';
import styled from 'styled-components';
import { InputOnChangeType, InputValueType } from '../../core/types';
import { InputLabel, InputWrapper, StyledBorder, StyledInput } from './Common';

interface IProps {
	id?: string;
	name?: string;
	value?: InputValueType;
	defaultValue?: InputValueType;
	onChange?: InputOnChangeType;
	type?: React.HTMLInputTypeAttribute;
};

const TimeInput = styled(StyledInput)`
	max-width: 40px;
`;


export const TimeInputFrom = (props: IProps) => {
	return (
		<InputWrapper>
			<InputLabel>Od</InputLabel>
			<StyledBorder>
				<HourglassTop />
				<TimeInput
					{...props}
				/>
			</StyledBorder>
		</InputWrapper>
	);
};


export const TimeInputTo = (props: IProps) => {
	return (
		<InputWrapper>
			<InputLabel>Do</InputLabel>
			<StyledBorder>
				<HourglassBottom />
				<TimeInput
					{...props}
				/>
			</StyledBorder>
		</InputWrapper>
	);
};


export const TimeTotal = () => {
	return (
		<InputWrapper>
			<InputLabel>Razem</InputLabel>
			<StyledBorder>
				<HourglassFull />
				<TimeInput type="text" disabled />
			</StyledBorder>
		</InputWrapper>
	);
};
