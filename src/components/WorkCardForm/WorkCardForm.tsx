import HomeIcon from '@mui/icons-material/Home';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, TextField, TextFieldProps } from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { CancelButton, FormButtonGroup, FormFieldsGroup, PaymentInputWrapper, SaveButton, TimeWrapper } from '../CustomInput/Common';
import { CustomInput } from '../CustomInput/CustomInput';
import { DateInput } from '../CustomInput/DateInput';
import { InvoiceInputFrom, ReceiptInputFrom } from '../CustomInput/PaymentInput';
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

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-start',
				flexDirection: 'column',
				marginLeft: '0.5rem',
				marginRight: '0.5rem'

			}}
		>
			<Box sx={{
				fontSize: 24,
				fontWeight: 700,
				// m: 1,
				mb: 2,
				mt: 3
			}}>Nowa Karta Pracy</Box>
			<Box
				sx={{
					marginTop: "0.5rem",
					marginBottom: "0.5rem",
					width: "100%"
				}}
			>
				<form onSubmit={formik.handleSubmit}>

					<FormFieldsGroup>
						<DateInput />
					</FormFieldsGroup>

					<FormFieldsGroup>
						<CustomInput
							label="Adres"
							Icon={<HomeIcon />}
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
							label="Opis pracy"
							Icon={<NoteAltIcon />}
							type="textarea"
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<PaymentInputWrapper>
							<ReceiptInputFrom />
							<InvoiceInputFrom />
						</PaymentInputWrapper>
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

					<FormFieldsGroup>
						<CustomInput
							label="Dodatkowe koszta"
							Icon={<MoneyOffIcon />}
						/>
					</FormFieldsGroup>

					{/* <Button color="primary" variant="outlined" type="submit">Zapisz</Button> */}
					<FormButtonGroup>
						<CancelButton>Anuluj</CancelButton>
						<SaveButton type="submit">Zapisz</SaveButton>
					</FormButtonGroup>
				</form>
			</Box>
		</Box>
	)
}
