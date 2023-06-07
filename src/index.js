import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './Components/home/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>
);

