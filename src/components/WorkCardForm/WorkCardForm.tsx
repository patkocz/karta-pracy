import { Button, TextField } from '@mui/material';
import { Field, Formik, useFormik } from 'formik';
import React from 'react';



export default function WorkCardForm() {

	const formik = useFormik({
		initialValues: {
			date: '',
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
			<h1>Nowa Karte Pracy</h1>
			<form onSubmit={formik.handleSubmit}>

				<TextField
					fullWidth
					id="date"
					name="date"
					label="Data"
					type="date"
					value={formik.values.date}
					onChange={formik.handleChange}
					error={formik.touched.date && Boolean(formik.errors.date)}
					helperText={formik.touched.date && formik.errors.date}
				/>

				<TextField
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


				<div className="form-row">
					<TextField
						id="timeFrom"
						name="timeFrom"
						label="Godziny Od"
						type="text"
						value={formik.values.timeFrom}
						onChange={formik.handleChange}
						error={formik.touched.timeFrom && Boolean(formik.errors.timeFrom)}
						helperText={formik.touched.timeFrom && formik.errors.timeFrom}
					/>

					<TextField
						id="timeTo"
						name="timeTo"
						label="Godziny Do"
						type="text"
						value={formik.values.timeTo}
						onChange={formik.handleChange}
						error={formik.touched.timeTo && Boolean(formik.errors.timeTo)}
						helperText={formik.touched.timeTo && formik.errors.timeTo}
					/>
				</div>

				<TextField
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

				<div className="form-row">
					<TextField
						id="receipt"
						name="receipt"
						label="Rachunek"
						type="text"
						value={formik.values.receipt}
						onChange={formik.handleChange}
						error={formik.touched.receipt && Boolean(formik.errors.receipt)}
						helperText={formik.touched.receipt && formik.errors.receipt}
					/>

					<TextField
						id="invoice"
						name="invoice"
						label="Faktura"
						type="text"
						value={formik.values.invoice}
						onChange={formik.handleChange}
						error={formik.touched.invoice && Boolean(formik.errors.invoice)}
						helperText={formik.touched.invoice && formik.errors.invoice}
					/>
				</div>

				<Button color="primary" variant="outlined" type="submit">Zapisz</Button>
			</form>
		</div>
	)
}
