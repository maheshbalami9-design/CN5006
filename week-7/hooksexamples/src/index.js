import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

// Import your components
import Hook_ControlledButtonState from './StatewithHookButton';
import EmojeeCounter from './EmojeeCounters';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic="Love" />
    <EmojeeCounter pic="sad" />
    <EmojeeCounter pic="Like" />
  </React.StrictMode>
);
