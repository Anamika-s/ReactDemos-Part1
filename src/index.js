import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import A from './First';
import { Second,Third } from './First';
//import Second  from './Second';
import Car from './Car';
import Test1 from './components/Test';
import {Test2, Test3} from './components/Test';



const myFirstElement =<h1> Hello All </h1>;
//  ReactDOM.render(myFirstElement , document.getElementById("hello"));
// ReactDOM.render(<p> Hello </p>, document.getElementById("root"));
const mytable =
(
  <table> 
  <tr> 
    <th>  RollNo   </th>
    <th>  Name     </th>
  </tr>
  <tr> 
    <td>  1   </td>
    <td>  Ajay     </td>
  </tr>
  <tr> 
    <td>  2   </td>
    <td>  Deepak     </td>
  </tr>
</table>
);
ReactDOM.render([<App/>, <Test1 /> , <Test2 />], document.getElementById("root"));
//ReactDOM.render([<Aaaa/>, <Car name="Honda"/> , <Third/>, <A /> , <Second name="Ajay" /> , <Second name="Ajay" /> ,<Second name="Deepak" />, <Second name="Ajay" />, <Second name="Ajay" />], document.getElementById("root"));
//ReactDOM.render([mytable ,<First/>, <App/>] , document.getElementById("root"));
//ReactDOM.render(mytable, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
