import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router,  Route, Redirect} from "react-router-dom";

import Rightsidebar from './components/Rightsidebar';
import Login from './pages/Login';
import Home from './pages/Home';


const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('auth') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div id="wrapper"> 
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>      
      <Rightsidebar />
      <a href="#" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
      <div id="pageloader-overlay" className="visible incoming"><div className="loader-wrapper-outer"><div className="loader-wrapper-inner"><div className="loader" /></div></div></div>
    </div>
  );
}

export default App;
