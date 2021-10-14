import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './component/NavigationBar/NavigationBar';
import Menu from './component/NavigationBar/Manu';

ReactDOM.render(
  <React.StrictMode>
    <div className=" bg-blue-500">
      <NavBar
        NavbarName="Boilerplate React"
        NavbarColor="text-white"
      >
      </NavBar>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
