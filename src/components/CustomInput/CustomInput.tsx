import React from 'react';
import styled from 'styled-components';
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

const Textarea = styled.textarea`
	font-size: 1rem;
	color: #555;
	outline: none;
	width: 100%;
	border: none;
	box-sizing: border-box;
`;

export const CustomInput = ({ label, Icon, type, ...props }: IProps) => {
	const input = type === 'textarea'
		? <Textarea
			id={props.id}
			name={props.name}
			value={props.value}
			defaultValue={props.defaultValue}
			rows={4}
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
				{input}
			</StyledBorder>
		</InputWrapper>
	);
};
