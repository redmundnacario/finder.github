import React from 'react'
import {Card, Image} from 'react-bootstrap'


const UserItem = ({user : {login, avatar_url, html_url}}) => {
    return (
        <Card className="user-item text-center">
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Image src={avatar_url} alt="" roundedCircle/>
                <div>
                    <a role="button" className="btn btn-dark btn-sm mt-3" href={html_url}>Visit Page</a>
                </div>

            </Card.Body>
        </Card>
    )
}

export default UserItem
