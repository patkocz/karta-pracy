import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { DataContext } from './context/dataContext';
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
			<DataContext.Provider value={{}} >
				<App />
			</DataContext.Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
