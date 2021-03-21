import React, {Fragment , useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavbarComponent from './components/shared/navbar/navbar.component';
import SearchBar from './components/search-bar/search-bar.component';
import UserList from './components/users/users-list.component';
import ClearResults from './components/clear-results/clear-results.component';
import './App.scss';

//pages
import About from "./pages/about.component";
import UserPage from "./pages/user.component"

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showClear, setShowClear] = useState(false)
  const [searchStr, setSearchStr] = useState(undefined)


  const getUsers = async() =>{
    setIsLoading(true)
  
    const userSearch = new URLSearchParams({
        q: searchStr
    })
  
    let options = new URLSearchParams({
        client_id : process.env.REACT_APP_CLIENT_ID,
        client_secret : process.env.REACT_APP_CLIENT_SECRET
    })
  
    options = "" + options + (searchStr ? `&` + userSearch : "")
  
    
    let url;
    if (searchStr){
      url = `https://api.github.com/search/users?`
    } else {
      url = `https://api.github.com/users?`
    }

    console.log(url+ options)
    const res = await fetch(url+ options)
                .then(response => response.json())
                .then(result => result)
    setUsers(searchStr ? res.items  : res)
    setIsLoading(false)
    setShowClear(true)
  }

  const getUser = async(user) => {
    setIsLoading(true)

    let options = new URLSearchParams({
      client_id : process.env.REACT_APP_CLIENT_ID,
      client_secret : process.env.REACT_APP_CLIENT_SECRET
    })

    const url = `https://api.github.com/users/${user}?`
    const res = await fetch(url + options)
                  .then(result => result.json())
                  .catch(result => result)
    
    setUser(res)
    setIsLoading(false)
  }

  const getRepo = async(user) => {
    const url = `${process.env.REACT_APP_REPO_URL}/?username=${user}`
    console.log(url)
    const res = await fetch(url)
                  .then(result => result.json())
                  .catch(result => result)
    
    setUserRepos(res)
  }
  

  const handleClickSearch = (e, searchString) =>{
    e.preventDefault()
    setSearchStr(searchString)
    setUsers([])
  }
  
  const clearResults = (e) => {
    e.preventDefault()
    setShowClear(false)
    setSearchStr(undefined)

    setUsers([])
  }

  useEffect(() => {
    console.log("render called")
    getUsers()
    // eslint-disable-next-line
  } , [searchStr])

  return (
    <Router>
      <div className="App mb-5">
        <NavbarComponent/>
        <Switch>
          <Route
            exact
            path = "/"
            render = { props => (
              <Fragment>
                <SearchBar
                resetSearch = {showClear}
                handleClickSearch = {handleClickSearch}/>
                { showClear && (<ClearResults searchStr={searchStr} handleClick={clearResults} />)}
                <UserList 
                  users={users}
                  isLoading={isLoading}/>
              </Fragment>
            )
            }
          />
          <Route exact path="/about" component={About}/>
          <Route exact path={"/user/:login"} 
            render={props => (
              <UserPage
                {...props}
                user={user}
                userRepos={userRepos}
                getUser={getUser}
                getRepo={getRepo}
                isLoading={isLoading}
              />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App
