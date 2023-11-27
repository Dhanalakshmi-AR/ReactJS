import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
// import HtmlTags from './HtmlTags';
// import TeaStall from './TeaStall';
// import State from './State';
import reportWebVitals from './reportWebVitals';
// import Fibonacci from './Fibonacci';
// import Bootstrap from './Bootstrap';
import BoxColor from './BoxColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HtmlTags /> */}
    {/* <TeaStall /> */}
    {/* <State/> */}
    {/* <Fibonacci/> */}
    {/* <Bootstrap/> */}
    <BoxColor/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
