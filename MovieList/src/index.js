import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function createArray(itemsCount) {
  const arr = [];
  for (let i = 1; i <= itemsCount; i++) {
    arr.push(i);
  }
  return arr;
}

function paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  return items.slice(startIndex, endIndex);
}

const items = createArray(15);
(paginate(items, 1, 4));

