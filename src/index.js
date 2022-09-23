import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const taskList = ["buy cat food", "take the dogs on a walk", "learn React"]

root.render(
  <React.StrictMode>
    <MyList 
      theList={taskList}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your MyList, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
