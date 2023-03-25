import './locales/i18n';

import './utils/highlight';

import 'simplebar/src/simplebar.css';

import 'react-image-lightbox/style.css';

import 'mapbox-gl/dist/mapbox-gl.css';

import 'react-quill/dist/quill.snow.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux/store';

import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

import { AuthProvider } from './contexts/AuthContext';

import LoadingScreen from './components/LoadingScreen';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <AuthProvider>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CollapseDrawerProvider>
          </SettingsProvider>
        </AuthProvider>
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
