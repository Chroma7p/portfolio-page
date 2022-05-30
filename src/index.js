import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './navbar';
import { Page } from './page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar/>
    <Page />
  </div>
);
