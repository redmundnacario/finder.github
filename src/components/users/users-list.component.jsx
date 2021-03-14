import React, { Component } from 'react'

import UserItem from './user-item.component';
import Spinner from '../shared/spinner/spinner.component';

import './user.styles.scss';

export class UserList extends Component {
    constructor () {
        super()
        this.state = {
            users : [],
            isLoading : false
        }
    }

    getUsers = async() =>{
        this.setState({isLoading : true})
        const options = new URLSearchParams({
            client_id : process.env.REACT_APP_CLIENT_ID,
            client_secret : process.env.REACT_APP_CLIENT_SECRET
        })
        const res = await fetch(`https://api.github.com/users?`+ options)
                    .then(response => response.json())
                    .then(result => result)
        return res
    }

    async componentDidMount(){
        const res = await this.getUsers()
        this.setState({users: res})
        this.setState({isLoading: false})
    }

    render() {
        const {users} = this.state

        if (this.state.isLoading | this.state.users.length === 0){
            return <Spinner/>
        } else {
            return (
                <div className="user-list container grid-3">
                    {
                        users.map(user => (
                            <UserItem key={user.id} user={user}/>
                        ))
                    }  
                </div>
            )
        }
    }
}

export default UserList
