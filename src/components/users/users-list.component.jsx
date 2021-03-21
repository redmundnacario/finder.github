import React from 'react';

import UserItem from './user-item.component';
import Spinner from '../shared/spinner/spinner.component';

import './user.styles.scss';  

const UserList = ({users, isLoading}) => {

    
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
