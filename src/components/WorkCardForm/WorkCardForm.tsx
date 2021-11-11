import { Box, TextField, TextFieldProps } from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import { calculateTime, parseTimeInput } from '../../helpers/timeHelpers';
import { addWorkCard } from '../../services/dataService';
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
			timeSum: '',
			workDescription: '',
			receipt: '',
			invoice: '',
			empl1: {
				name: '',
				timeFrom: '',
				timeTo: ''

			},
			empl2: {
				name: '',
				timeFrom: '',
				timeTo: ''

			}

		},
		onSubmit: (data) => {
			console.log(data);

			addWorkCard({
				date: new Date(data.date),
				customer: {
					name: data.customer.name
				},
				timeStart: parseTimeInput(data.timeFrom),
				timeEnd: parseTimeInput(data.timeTo),
				workDescription: data.workDescription,
				receipt: Number(data.receipt),
				invoice: Number(data.invoice),
				employess: [
					{
						firstName: data.empl1.name,
						timeStart: parseTimeInput(data.empl1.timeFrom),
						timeEnd: parseTimeInput(data.empl1.timeTo),
					},
					{
						firstName: data.empl2.name,
						timeStart: parseTimeInput(data.empl2.timeFrom),
						timeEnd: parseTimeInput(data.empl2.timeTo),
					}
				]
			})
		},

	})

	const calcTime = (t1: string, t2: string, setFieldValue: (p1: string, p2: any, p3?: boolean) => any) => {
		if (!t1 || !t2) {
			return ''
		};

		const t = calculateTime(
			parseTimeInput(t1),
			parseTimeInput(t2)
		)

		if (!t) {
			return '';
		}

		setFieldValue('timeSum', `${t.hours}:${t.minutes}`);

		return `${t.hours}:${t.minutes}`
	}

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
						<DateInput
							id='date'
							name='date'
							onChange={formik.handleChange}
							value={formik.values.date}
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TextField
							fullWidth
							id='customer.name'
							name='customer.name'
							onChange={formik.handleChange}
							value={formik.values.customer.name}
							label="Adres"
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TimeWrapper >
							<TextField
								fullWidth
								label="Od"
								name="timeFrom"
								id="timeFrom"
								value={formik.values.timeFrom}
								onChange={formik.handleChange}
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								label="Do"
								name="timeTo"
								id="timeTo"
								value={formik.values.timeTo}
								onChange={formik.handleChange}
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								disabled
								// label="Do"
								name="timeSum"
								id="timeSum"
								onChange={formik.handleChange}

								value={calcTime(
									formik.values.timeFrom,
									formik.values.timeTo,
									formik.setFieldValue
								)}
							// label="Razem"
							/>
						</TimeWrapper>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<TextField
							fullWidth
							id='workDescription'
							name='workDescription'
							onChange={formik.handleChange}
							value={formik.values.workDescription}
							label="Opis"
							minRows={3}
							multiline
						/>
					</FormFieldsGroup>

					<FormFieldsGroup>
						<PaymentWrapper >
							<TextField
								fullWidth
								id='receipt'
								name='receipt'
								onChange={formik.handleChange}
								value={formik.values.receipt}
								label="Rachunek"
								sx={
									{
										marginRight: '16px'
									}
								}
							/>
							<TextField
								fullWidth
								id='invoice'
								name='invoice'
								onChange={formik.handleChange}
								value={formik.values.invoice}
								label="Faktura"
							/>
						</PaymentWrapper>
					</FormFieldsGroup>



					<FormFieldsGroup>
						<TextField
							fullWidth
							id='empl1.name'
							name='empl1.name'
							onChange={formik.handleChange}
							value={formik.values.empl1.name}
							label="Pracownik 1"
							sx={{
								marginBottom: '8px'
							}}
						/>
						<TimeWrapper >
							<TextField
								fullWidth
								id='empl1.timeFrom'
								name='empl1.timeFrom'
								onChange={formik.handleChange}
								value={formik.values.empl1.timeFrom}
								label="Od"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								id='empl1.timeTo'
								name='empl1.timeTo'
								onChange={formik.handleChange}
								value={formik.values.empl1.timeTo}
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
							id='empl2.name'
							name='empl2.name'
							onChange={formik.handleChange}
							value={formik.values.empl2.name}
							label="Pracownik 2"
							sx={{
								marginBottom: '8px'
							}}
						/>
						<TimeWrapper >
							<TextField
								fullWidth
								id='empl2.timeFrom'
								name='empl2.timeFrom'
								onChange={formik.handleChange}
								value={formik.values.empl2.timeFrom}
								label="Od"
								sx={{
									marginRight: '16px'
								}}
							/>
							<TextField
								fullWidth
								id='empl2.timeTo'
								name='empl2.timeTo'
								onChange={formik.handleChange}
								value={formik.values.empl2.timeTo}
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
