import { Box, TextField, TextFieldProps } from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import { CancelButton, FormButtonGroup, FormFieldsGroup, PaymentInputWrapper, PaymentWrapper, SaveButton, TimeWrapper } from '../CustomInput/Common';
import { DateInput } from '../CustomInput/DateInput';
// import HomeIcon from '@mui/icons-material/Home';
// import MoneyOffIcon from '@mui/icons-material/MoneyOff';
// import NoteAltIcon from '@mui/icons-material/NoteAlt';
// import PersonIcon from '@mui/icons-material/Person';
// import { CustomInput } from '../CustomInput/CustomInput';
// import { InvoiceInputFrom, ReceiptInputFrom } from '../CustomInput/PaymentInput';
// import { TimeInputFrom, TimeInputTo, TimeTotal } from '../CustomInput/TimeInput';

export const WorkCardForm = () => {
	const history = useHistory();

	const onClick = () => history.push('/');

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
		onSubmit: onClick
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
				mb: 2,
				mt: 3,
				color: '#555;',
				width: ' 100%',
				borderBottom: '1px solid #555',
				paddingBottom: '8px'
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
						<TextField
							fullWidth
							label="Adres"
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TimeWrapper >
							<TextField
								fullWidth
								label="Od"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								label="Do"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								disabled
								label="Razem"
							/>
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TextField
							fullWidth
							label="Opis"
							minRows={3}
							multiline
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<PaymentWrapper >
							<TextField
								fullWidth
								label="Rachunek"
								sx={
									{
										marginRight: '16px'
									}
								}
							/>
							<TextField
								fullWidth
								label="Faktura"
							/>
						</PaymentWrapper>
					</FormFieldsGroup>



					<FormFieldsGroup>
						<TextField
							fullWidth
							label="Pracownik 1"
							sx={{
								marginBottom: '8px'
							}}
						/>
						<TimeWrapper >
							<TextField
								fullWidth
								label="Od"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								label="Do"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								disabled
								label="Razem"
							/>
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TextField
							fullWidth
							label="Pracownik 2"
							sx={{
								marginBottom: '8px'
							}}
						/>
						<TimeWrapper >
							<TextField
								fullWidth
								label="Od"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								label="Do"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								disabled
								label="Razem"
							/>
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TextField
							fullWidth
							label="Dodatkowe koszta"
						/>
					</FormFieldsGroup>

					<FormButtonGroup>
						<CancelButton onClick={onClick}>Anuluj</CancelButton>
						<SaveButton type="submit">Zapisz</SaveButton>
					</FormButtonGroup>
				</form>
			</Box>
		</Box>
	)
}
