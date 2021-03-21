import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GithubState from './context/github/GithubState';

import NavbarComponent from './components/shared/navbar/navbar.component';
import './App.scss';

//pages
import About from "./components/pages/about.component";
import Home from "./components/pages/home.component";
import UserPage from "./components/pages/user.component"

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App mb-5">
          <NavbarComponent/>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path={"/user/:login"} component={UserPage}/>
          </Switch>
        </div>
      </Router>
    </GithubState>
   );
}

export default App
