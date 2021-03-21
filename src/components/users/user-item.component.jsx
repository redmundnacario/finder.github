import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image, Button} from 'react-bootstrap'

const UserItem = ({user : {login, avatar_url}}) => {


    return (
        <Card className="user-item text-center" >
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Image src={avatar_url} alt="" roundedCircle/>
                <div>
                    <Link as={Button} className="btn btn-dark btn-sm mt-3" to={`/user/${login}`}>Visit Page</Link>
                </div>

            </Card.Body>
        </Card>
    )
}

export default UserItem
