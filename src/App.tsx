import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigator } from './navigator';

import {ThemeProvider, createTheme} from '@mui/material';

const App = () => {
  return (

      <ThemeProvider
        theme={createTheme()}
      >
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </ThemeProvider>

  );
}

export default App;
