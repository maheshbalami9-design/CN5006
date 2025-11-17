import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElementwithProp from './mygreetingprop';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GreetingElementwithProp msg="Hello! This is a greeting with props!" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
