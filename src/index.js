import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


//pages

import App from './App'

//importing css
import './index.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <App />
    </Router>
  </>
)





