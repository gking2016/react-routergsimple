import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Lorem1 from './routes/Lorem1';
// import Lorem2 from './routes/Lorem2';
// import Lorem3 from './routes/Lorem3';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<><App/></>}></Route>
    <Route path="/Lorem1" element={<Lorem1/>}></Route>
    {/* <Route path="/Lorem2" element={<Lorem2/>}></Route>
    <Route path="/Lorem3" element={<Lorem3/>}></Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
