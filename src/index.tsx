import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StoreContextProvider } from './context/StoreContext';
import './styles/index.scss';


const theme = createTheme({
	palette: {
		primary: {
			main: '#1abc9c'
		}
	}
})

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StoreContextProvider >
				<LocalizationProvider dateAdapter={DateAdapter}>
					<App />
				</LocalizationProvider>
			</StoreContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
