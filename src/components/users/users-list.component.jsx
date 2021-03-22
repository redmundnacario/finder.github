import React, {useContext } from 'react';

import GithubContext from '../../context/github/githubContext.js'; 
import UserItem from './user-item.component';
import Spinner from '../shared/spinner/spinner.component';

import './user.styles.scss';  

const UserList = () => {

    const githubContext = useContext(GithubContext)
    const { users, isLoading } = githubContext
    
    // useEffect(()=>{
    //     getUsers()
    //     // eslint-disable-next-line
    // },[])

    if (isLoading | users.length === 0){

        return <Spinner/>

    } else {

        return (
            <div className="user-list container mt-5">
                {
                    users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }  
            </div>
        )

    }
}

export default UserList
