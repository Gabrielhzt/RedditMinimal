import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers';

import './index.css';
import App from './components/App/App';

const root = createRoot(document.getElementById('root'));

// Créez le store en utilisant configureStore
const store = configureStore({
  reducer: rootReducer,
  // Autres configurations éventuelles...
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
