import ReactDOM from 'react-dom';
import React from 'react';

import Student from "./student";
import MyMenu from './components/Menu';
import itemSelect from "./components/multiSelect";
import Example from "./components/menuItem";

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
      <div>
        <MyMenu/>
        <Student/>
        <itemSelect/>
        {/* <Example/> */}
      </div>, 
    document.getElementById('root'));