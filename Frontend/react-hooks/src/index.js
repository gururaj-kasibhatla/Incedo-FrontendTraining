import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeavyComponent from './HeavyComponent';
import { InformationStore } from './MyContext';
import MyConsumer1 from './MyConsumer1';
import MyConsumer2 from './MyConsumer2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HeavyComponent/> */}

    <InformationStore>
      <MyConsumer1></MyConsumer1>
      <br></br>
      <MyConsumer2></MyConsumer2>
    </InformationStore>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
