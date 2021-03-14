import React from 'react'

const UserItem = ({user : {login, avatar_url, html_url}}) => {
    return (
        <div className="user-item card text-center">
            <h2>{login}</h2>
            <img className="round-img" src={avatar_url} alt=""/>
            <div>
                <a className="btn btn-dark btn-sm my-1" href={html_url}>Visit Page</a>
            </div>
        </div>
    )
}

export default UserItem
