import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
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
	  		<App />
		</ThemeProvider>
  	</React.StrictMode>,
  document.getElementById('root')
);
