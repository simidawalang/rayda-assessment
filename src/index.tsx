import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const THEME = createTheme({
  typography: {
    fontFamily: `"IBM Plex Sans", sans-serif;`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={THEME}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
