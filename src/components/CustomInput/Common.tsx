import { TextField } from '@mui/material';
import styled from 'styled-components';

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	margin-bottom: 4px;
	margin-right: 8px;

	&:last-of-type {
		margin-right: 0;
	}
`;

export const InputLabel = styled.span`
	margin-bottom: 4px;
	margin-left: 4px;
	color: #555;
`;

export const StyledInput = styled.input`
	width: auto;
	display: flex;
	//   max-width: 50px;
	width: 100%;
	max-height: 40px;
	height: 100%;
	font-size: 16px;
	border: none;
	width: 100%;
	padding-left: 1px;

	&:focus {
		outline: none;
	}
`;

export const StyledTextarea = styled(TextField)`
	width: auto;
	display: flex;
	width: 100%;
	min-width: 100%auto;
	/* max-height: 40px; */
	height: 100%;
	font-size: 16px;
	border: none;
	width: fit-content;
	padding-left: 1px;
	border: none;

	&.MuiTextField-root {
		/* background-color: red; */
		&.MuiOutlinedInput-root {
			padding-left: 0;

			&.MuiOutlinedInput-notchedOutline {
				border: none;
			}
		}
	}

	&:focus {
		outline: none;
	}
`;


export const StyledBorder = styled.span`
	border: 1px solid #bbb;
	padding: 6px 8px;
	line-height: 16px;
	border-radius: 4px;
	min-height: 40px;
	height: 100%auto;
	box-sizing: border-box;
	width: 100%;
	font-size: 1.5rem;
	color: #555;
	text-align: center;
	display: flex;
	align-items: center;
`;

export const TimeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 320px;
	width: 100%;

`;

export const FormFieldsGroup = styled.div`
	margin-bottom: 8px;
`;
