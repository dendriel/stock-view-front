import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import reportWebVitals from './reportWebVitals';
import CustomNavbar from "./components/CustomNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <CustomNavbar />
        <Routes />
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
