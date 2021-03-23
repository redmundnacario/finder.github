import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AlertState from './context/alert/AlertState';
import GithubContext from './context/github/githubContext.js'; 


import NavbarComponent from './components/shared/navbar/navbar.component';
import ToastContainer from './components/shared/toast/toast-container.component';
import './App.scss';

//pages
import About from "./components/pages/about.component";
import Home from "./components/pages/home.component";
import UserPage from "./components/pages/user.component";
import NotFound from "./components/pages/notfound.component";

const App = () => {

  const githubContext = useContext(GithubContext)

  useEffect(()=>{
      githubContext.getUsers()
      // eslint-disable-next-line
  },[])


  return (
    <AlertState>
      <Router>
        <div className="App mb-5">
          <NavbarComponent/>
          <ToastContainer/>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path={"/user/:login"} component={UserPage}/>
            <Route exact path={"/user/:login"} component={UserPage}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
    </AlertState>
   );
}

export default App
