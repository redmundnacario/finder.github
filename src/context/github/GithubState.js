import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    GET_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_USERREPOS,
    CLEAR_USERREPOS,
    SET_LOADING
} from '../types'

let githubClientId;
let githubClientSecret;
let githubRepoUrl;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  githubRepoUrl = process.env.REACT_APP_REPO_URL;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  githubRepoUrl = process.env.REPO_URL;
}

const GithubState = props => {
    const initialState ={
        users: [],
        user: {},
        userRepos: [],
        isLoading : false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get all users
    const getUsers = async(searchStr) =>{
        setIsLoading()
      
        const userSearch = new URLSearchParams({
            q: searchStr
        })
      
        let options = new URLSearchParams({
            client_id : githubClientId,
            client_secret : githubClientSecret
        })
      
        options = "" + options + (searchStr ? `&` + userSearch : "")
      
        
        let url;
        if (searchStr){
          url = `https://api.github.com/search/users?`
        } else {
          url = `https://api.github.com/users?`
        }
    
        const res = await fetch(url+ options)
                    .then(response => response.json())
                    .then(result => result)

        dispatch({
                    type: GET_USERS,
                    payload: searchStr ? res.items  : res
                })
      }

    // Clear all users
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }

    // Get user

    const getUser = async(user) => {
        setIsLoading()
    
        let options = new URLSearchParams({
          client_id : githubClientId,
          client_secret : githubClientSecret
        })
    
        const url = `https://api.github.com/users/${user}?`
        const res = await fetch(url + options)
                      .then(result => result.json())
                      .catch(result => result)
        dispatch({
                  type: GET_USER,
                  payload: res
                })
      }

    // Get user repos
    const getRepo = async(user) => {
        clearUserRepos()
        setIsLoading()
        const url = `https${githubRepoUrl}/?username=${user}`
        
        const res = await fetch(url)
                      .then(result => result.json())
                      .catch(result => result)
        
        dispatch({
                  type: GET_USERREPOS,
                  payload: res
                })
      }

    // Set Loading
    const setIsLoading = () => { dispatch({type:SET_LOADING})}
    
    const clearUserRepos = () => {dispatch({type:CLEAR_USERREPOS})}
    
    return (
        <GithubContext.Provider
            value = {{
                users: state.users,
                user : state.user,
                userRepos : state.userRepos,
                isLoading : state.isLoading,
                getUsers,
                setIsLoading,
                clearUsers,
                getUser,
                getRepo,
                clearUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;