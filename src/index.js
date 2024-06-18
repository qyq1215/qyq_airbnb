import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import APP from './APP';
import "normalize.css"
import { theme } from './assets/theme'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <Suspense>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <APP />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  
);
