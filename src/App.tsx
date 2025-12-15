import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigator } from './navigator';

const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
