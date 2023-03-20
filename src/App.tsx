import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigator } from './navigator';

import {ConfigProvider, theme} from 'antd';
import QueryProvider from './services/client/query-provider';

const App = () => {
  return (

    <QueryProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#3d7cef',
          },
        }}
      >
        <div className="App">
            <BrowserRouter>
              <Navigator />
            </BrowserRouter>
        </div>
      </ConfigProvider>
    </QueryProvider>

  );
}

export default App;
