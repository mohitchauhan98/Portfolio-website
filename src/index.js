import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


{/* <Router>
        <Routes>
          <Route exact path = "/navbar" component = {Navbar} />
        </Routes>
      </Router> */}