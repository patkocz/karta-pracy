import React from 'react';
import { InputOnChangeType, InputValueType } from '../../core/types';
import { InputLabel, InputWrapper, StyledBorder, StyledInput, StyledTextarea } from './Common';

interface IProps {
	label?: string;
	Icon?: JSX.Element;
	id?: string;
	name?: string;
	value?: InputValueType;
	defaultValue?: InputValueType;
	onChange?: InputOnChangeType;
	type?: React.HTMLInputTypeAttribute | "textarea";

};

export const CustomInput = ({ label, Icon, type, ...props }: IProps) => {
	const input = type === 'textarea'
		? <StyledTextarea
			id={props.id}
			name={props.name}
			value={props.value}
			defaultValue={props.defaultValue}
			multiline
			sx={{
				width: "100%",
				border: "none"
			}}
			variant="outlined"
			fullWidth
		/>
		: <StyledInput
			type={type}
			{...props}
		/>

	return (
		<InputWrapper>
			<InputLabel>{label}</InputLabel>
			<StyledBorder>
				{Icon}
				{/* <StyledInput
					{...props}
				/> */}
				{input}
			</StyledBorder>
		</InputWrapper>
	);
};
