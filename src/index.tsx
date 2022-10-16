import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(config)

root.render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
        <App />
    </TamaguiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
