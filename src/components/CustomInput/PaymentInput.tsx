import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react';
import { InputOnChangeType, InputValueType } from '../../core/types';
import { InputLabel, InputWrapper, StyledBorder, StyledInput, TimeInput } from './Common';

interface IProps {
	id?: string;
	name?: string;
	value?: InputValueType;
	defaultValue?: InputValueType;
	onChange?: InputOnChangeType;
	type?: React.HTMLInputTypeAttribute;
};

export const ReceiptInputFrom = (props: IProps) => {
	return (
		<InputWrapper>
			<InputLabel>Rachunek</InputLabel>
			<StyledBorder>
				<AttachMoneyIcon />
				<TimeInput
					{...props}
				/>
			</StyledBorder>
		</InputWrapper>
	);
};


export const InvoiceInputFrom = (props: IProps) => {
	return (
		<InputWrapper>
			<InputLabel>Faktura</InputLabel>
			<StyledBorder>
				<AttachMoneyIcon />
				<TimeInput
					{...props}
				/>
			</StyledBorder>
		</InputWrapper>
	);
};
