import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, TextField, TextFieldProps } from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { FormFieldsGroup, TimeWrapper } from '../CustomInput/Common';
import { CustomInput } from '../CustomInput/CustomInput';
import { DateInput } from '../CustomInput/DateInput';
import { TimeInputFrom, TimeInputTo, TimeTotal } from '../CustomInput/TimeInput';

const CustomTextField = (props: TextFieldProps) => {
	return (
		<TextField
			{...props}
			sx={{
				mb: 1
			}}
			variant="filled"
		/>
	)
}

export default function WorkCardForm() {

	const formik = useFormik({
		initialValues: {
			date: moment().format("YYYY-MM-DD"),
			customer: {
				name: ''
			},
			timeFrom: '',
			timeTo: '',
			workDescription: '',
			receipt: '',
			invoice: '',

		},
		onSubmit: values => console.log(values)
	})

	// const x = () => <PersonIcon />;

	return (
		<div>
			<Box sx={{
				fontSize: 24,
				fontWeight: 700,
				m: 1,
				mt: 3
			}}>Nowa Karta Pracy</Box>
			<Box
				sx={{
					m: 1
				}}
			>
				<form onSubmit={formik.handleSubmit}>

					<FormFieldsGroup>
						<DateInput />
					</FormFieldsGroup>

					<FormFieldsGroup>
						<CustomInput
							label="Adres"
							Icon={<PersonIcon />}
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<CustomInput
							label="Opis pracy"
							Icon={<NoteAltIcon />}
							type="textarea"
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TimeWrapper >
							<TimeInputFrom />
							<TimeInputTo />
							<TimeTotal />
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<CustomInput
							label="Pracownik 1"
							Icon={<PersonIcon />}
						/>
						<TimeWrapper >
							<TimeInputFrom />
							<TimeInputTo />
							<TimeTotal />
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<CustomInput
							label="Pracownik 2"
							Icon={<PersonIcon />}
						/>
						<TimeWrapper >
							<TimeInputFrom />
							<TimeInputTo />
							<TimeTotal />
						</TimeWrapper>
					</FormFieldsGroup>

					<Button color="primary" variant="outlined" type="submit">Zapisz</Button>
				</form>
			</Box>
		</div>
	)
}
