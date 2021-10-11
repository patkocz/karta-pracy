import { Box, Button, TextField, TextFieldProps } from '@mui/material';
import { Field, Formik, useFormik } from 'formik';
import moment from 'moment';
import React from 'react';

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

					<CustomTextField
						sx={{
							mb: 1
						}}
						variant="filled"
						fullWidth
						id="date"
						name="date"
						label="Data"
						type="date"
						value={formik.values.date}
						defaultValue={formik.values.date}
						onChange={formik.handleChange}
						error={formik.touched.date && Boolean(formik.errors.date)}
						helperText={formik.touched.date && formik.errors.date}
					/>

					<CustomTextField
						variant="filled"
						fullWidth
						id="customer.name"
						name="customer.name"
						label="Address"
						type="text"
						value={formik.values.customer.name}
						onChange={formik.handleChange}
						error={formik.touched.customer?.name && Boolean(formik.errors.customer?.name)}
						helperText={formik.touched.customer?.name && formik.errors.customer?.name}
					/>


					<Box sx={{
						display: "flex",
						'& :first-child': {
							mr: 1
						}
					}}>
						<CustomTextField

							variant="filled"
							id="timeFrom"
							name="timeFrom"
							label="Godziny Od"
							type="text"
							value={formik.values.timeFrom}
							onChange={formik.handleChange}
							error={formik.touched.timeFrom && Boolean(formik.errors.timeFrom)}
							helperText={formik.touched.timeFrom && formik.errors.timeFrom}
						/>

						<CustomTextField
							id="timeTo"
							name="timeTo"
							label="Godziny Do"
							type="text"
							value={formik.values.timeTo}
							onChange={formik.handleChange}
							error={formik.touched.timeTo && Boolean(formik.errors.timeTo)}
							helperText={formik.touched.timeTo && formik.errors.timeTo}
						/>
					</Box>

					<CustomTextField
						fullWidth
						id="workDescription"
						name="workDescription"
						label="Opis Pracy"
						type="text"
						multiline
						value={formik.values.workDescription}
						onChange={formik.handleChange}
						error={formik.touched.workDescription && Boolean(formik.errors.workDescription)}
						helperText={formik.touched.workDescription && formik.errors.workDescription}
					/>

					<Box
						sx={{
							display: "flex",
							'& :first-child': {
								mr: 1
							}
						}}
					>
						<CustomTextField
							id="receipt"
							name="receipt"
							label="Rachunek"
							type="text"
							value={formik.values.receipt}
							onChange={formik.handleChange}
							error={formik.touched.receipt && Boolean(formik.errors.receipt)}
							helperText={formik.touched.receipt && formik.errors.receipt}
						/>

						<CustomTextField
							id="invoice"
							name="invoice"
							label="Faktura"
							type="text"
							value={formik.values.invoice}
							onChange={formik.handleChange}
							error={formik.touched.invoice && Boolean(formik.errors.invoice)}
							helperText={formik.touched.invoice && formik.errors.invoice}
						/>
					</Box>

					<Button color="primary" variant="outlined" type="submit">Zapisz</Button>
				</form>
			</Box>
		</div>
	)
}
