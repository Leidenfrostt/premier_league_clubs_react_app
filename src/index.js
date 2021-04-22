import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom'
import List from './components/list';
import Details from './components/details';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={List} />
      <Route path="/details/:id" component={Details} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
