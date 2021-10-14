import HourglassBottom from '@mui/icons-material/HourglassBottom';
import { getThemeProps } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputLabel = styled.span`
  margin-bottom: 4px;
  color: #555;
`;

const StyledInput = styled.input`
  width: auto;
  display: flex;
  max-width: 50px;
  max-height: 40px;
  height: 100%;
  font-size: 16px;
  border: none;
  width: fit-content;
  padding-left: 1px;

  &:focus {
	  outline: none;
  }
`;

const StyledSpan = styled.span`
  border: 1px solid #bbb;
  padding: 6px 8px;
  line-height: 16px;
  border-radius: 4px;
  height: 40px;
  box-sizing: border-box;
  width: fit-content;
//   margin-right: 8px;
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  display: flex;
  align-items: center;
`;

type InputValueType = string | number | readonly string[] | undefined;
type InputOnChangeType = React.ChangeEventHandler<HTMLInputElement> | undefined;

interface IProps {
	children?: React.ReactNode;
	id?: string;
	name?: string;
	label?: string;
	value?: InputValueType;
	defaultValue?: InputValueType;
	onChange?: InputOnChangeType;
	type?: React.HTMLInputTypeAttribute;
}

export const CustomInput = ({ children, label, type = "text", ...props }: IProps) => {
	return (
		<InputWrapper>
			<InputLabel>{label}</InputLabel>
			<StyledSpan>
				{children}
				<StyledInput
					type={type}
					{...props}
				/>
			</StyledSpan>
		</InputWrapper>
	);
};

// export const TimeInputFrom = ({ children, label, ...props }: IProps) => {
// 	return (
// 		<CustomInput label="Od" {...props}>
// 			<HourglassTop />
// 		</CustomInput>
// 	);
// };

// export const TimeInputTo = ({ children, label, ...props }: IProps) => {
// 	return (
// 		<CustomInput label="Do" {...props}>
// 			<HourglassBottom />
// 		</CustomInput>
// 	);
// };



// export const TimeTotal = () => {
// 	return (
// 		<InputWrapper>
// 			<InputLabel>Razem</InputLabel>
// 			<StyledSpan>
// 				<HourglassFull />
// 				<StyledInput type="text" disabled />
// 			</StyledSpan>
// 		</InputWrapper>
// 	);
// };

// export const TimeWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 320px;
//   width: 100%;

// //   background-color: palevioletred;
// `;
