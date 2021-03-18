import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Badge, Card , Image} from 'react-bootstrap'

import Repos from '../components/repos/repos.component';
import Spinner from '../components/shared/spinner/spinner.component';


export class UserPage extends Component {

    componentDidMount () {
        this.props.getUser(this.props.match.params.login)
        this.props.getRepo(this.props.match.params.login)
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user

        const {isLoading , userRepos} = this.props

        if (isLoading) {
        
            return <Spinner/>
            
        } else {
            return (
                <div className="user-page container">
                    <div>
                        <Link to='/' className='btn btn-light mt-3'>
                            <i className="fa fa-chevron-left"/> Back To Search
                        </Link>
                    </div>
                    
                    <Card className='mt-3' >
                        <Card.Body style = {{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"2vh"}}>
                            <div className='text-center' style={{display: "flex", justifyContent: "center"}}>
                                <div>
                                    <Image
                                        roundedCircle
                                        src={avatar_url}
                                        alt=''
                                        style={{ width: '150px' }}
                                    />
                                    <h1>{name}</h1>
                                    {location && <p>Location: {location}</p>}
                                    Hireable:{' '}
                                        {hireable ? (
                                            <i className='fas fa-check text-success' />
                                        ) : (
                                            <i className='fas fa-times-circle text-danger' />
                                        )}
                                </div>
                            </div>

                            <div style={{display: "flex", alignItems: "center"}}>
                                <div >
                                    {bio && (
                                        <Fragment>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                        </Fragment>
                                    )}
                                    <a href={html_url} className='btn btn-primary my-1'>
                                        Visit Github Profile
                                    </a>
                                    
                                    <div className="mt-4">
                                        <h6>
                                        {login && (
                                            <Fragment>
                                            <strong>Username: </strong> {login}
                                            </Fragment>
                                        )}
                                        </h6>

                                        <h6>
                                        {company && (
                                            <Fragment>
                                            <strong>Company: </strong> {company}
                                            </Fragment>
                                        )}
                                        </h6>

                                        <h6>
                                        {blog && (
                                            <Fragment>
                                            <strong>Website: </strong> {blog}
                                            </Fragment>
                                        )}
                                        </h6>
                                    </div>
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3" >
                        <Card.Body style = {{display:"flex"}} className="mx-auto my-auto">
                            <h5>
                                <Badge className="mr-1" variant='primary'>Followers: {followers}</Badge>
                            </h5>
                            <h5>
                                <Badge className="mr-1" variant='success'>Following: {following}</Badge>
                            </h5>
                            <h5>
                                <Badge className="mr-1" variant='light'>Public Repos: {public_repos}</Badge>
                            </h5>
                            <h5>
                                <Badge className="mr-1" variant='dark'>Public Gists: {public_gists}</Badge>
                            </h5>
                        </Card.Body>
                    </Card>
                    <div className="mt-3">
                        <Repos repos={userRepos}/>    
                    </div>
                </div>
            )
        }
    }
}

export default UserPage

