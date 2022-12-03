import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from './components/Modal';
import GlobalState from './context/GlobalState';
import { ModalProvider } from './context/ModalContext';
import Routes from './router';
import Home from './screens/Home';
import { GlobalStyle } from './styles/global';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e61919',
      },
      secondary: {
        main: '#f0f0f0',
      },
      terciary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: [
        'Poppins',
      ]
    }
  });
  

return (
  <>
   <BrowserRouter>
    <GlobalState>
      <ModalProvider>
          <MuiThemeProvider theme={theme}>
            <Routes/>
            <Modal/>
          </MuiThemeProvider>
          <GlobalStyle/>
      </ModalProvider>
    </GlobalState>
  </BrowserRouter>
  </>
)
}

export default App
