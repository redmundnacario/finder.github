import React, {Fragment, Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavbarComponent from './components/shared/navbar/navbar.component';
import SearchBar from './components/search-bar/search-bar.component';
import UserList from './components/users/users-list.component';
import ClearResults from './components/clear-results/clear-results.component';
import './App.scss';

//pages
import About from "./pages/about.component";
import UserPage from "./pages/user.component"

export class App extends Component {
  constructor () {
    super ()

    this.state = {
      users: [],
      user : {},
      userRepos : [],
      isLoading : false,
      showClear : false,
      searchStr : undefined
    }
  }


  getUsers = async() =>{
    this.setState({isLoading : true})
  
    const userSearch = new URLSearchParams({
        q: this.state.searchStr
    })
  
    let options = new URLSearchParams({
        client_id : process.env.REACT_APP_CLIENT_ID,
        client_secret : process.env.REACT_APP_CLIENT_SECRET
    })
  
    options = "" + options + (this.state.searchStr ? `&` + userSearch : "")
  
    
    let url;
    if (this.state.searchStr){
      url = `https://api.github.com/search/users?`
    } else {
      url = `https://api.github.com/users?`
    }

    console.log(url+ options)
    const res = await fetch(url+ options)
                .then(response => response.json())
                .then(result => result)
    
    return this.state.searchStr ? res.items  : res
  }

  getUser = async(user) => {
    this.setState({isLoading : true})

    let options = new URLSearchParams({
      client_id : process.env.REACT_APP_CLIENT_ID,
      client_secret : process.env.REACT_APP_CLIENT_SECRET
    })

    const url = `https://api.github.com/users/${user}?`
    const res = await fetch(url + options)
                  .then(result => result.json())
                  .catch(result => result)
    this.setState({user: res, isLoading: false,})
  }

  getRepo = async(user) => {
    const url = `${process.env.REACT_APP_REPO_URL}/?username=${user}`
    console.log(url)
    const res = await fetch(url)
                  .then(result => result.json())
                  .catch(result => result)
    console.log(res)
    this.setState({userRepos: res})
  }
  

  handleClickSearch = (e, searchString) =>{
    e.preventDefault()

    console.log(searchString)

    this.setState({searchStr: searchString}, async() => {
      const res = await this.getUsers()
      this.setState({users: res, 
                     isLoading: false,
                     showClear: true })
    })
  }
  
  clearResults = (e) => {
    e.preventDefault()
    this.setState({showClear: false, 
                   searchStr: undefined,
                   users: []}, async() => {
                    await this.fetchUsers()
                  })

  }

  async componentDidMount(){
    await this.fetchUsers()
  }

  fetchUsers = async() => {
    const res = await this.getUsers()
    this.setState({users: res, 
                   isLoading: false,
                   showClear: true })
  }


  render() {
    const {users, isLoading, showClear ,searchStr, user, userRepos} = this.state

    console.log("render called")

    return (
      <Router>
        <div className="App">
          <NavbarComponent/>
          <Switch>
            <Route
              exact
              path = "/"
              render = { props => (
                <Fragment>
                  <SearchBar 
                  handleClickSearch = {this.handleClickSearch}/>
                  { showClear && (<ClearResults searchStr={searchStr} handleClick={this.clearResults} />)}
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
                  getUser={this.getUser}
                  getRepo={this.getRepo}
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
}

export default App
