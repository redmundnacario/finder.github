import React, { Fragment, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import {Badge, Card , Image} from 'react-bootstrap'

import Repos from '../repos/repos.component';
import Spinner from '../shared/spinner/spinner.component';

import GithubContext from '../../context/github/githubContext';

import './user.styles.scss';

const UserPage = ({match}) => {

    const githubContext = useContext(GithubContext)
    const { user, isLoading, userRepos, getUser, getRepo } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        getRepo(match.params.login)
        // eslint-disable-next-line
    }, []) 

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
    } = user


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
                
                <Card className='info-container mt-3' >
                    <Card.Body className='info-body'>
                        <div className='info-content text-center'>
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

                        <div className="info-content info-content-v-center">
                            <div >
                                {bio && (
                                    <Fragment>
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
                <Card className="info-container mt-3">
                    <Card.Body className="d-flex flex-wrap justify-content-center">
                        <Badge className="mr-2 mb-2" variant='primary'>Followers: {followers}</Badge>
                        <Badge className="mr-2 mb-2" variant='success'>Following: {following}</Badge>
                        <Badge className="mr-2 mb-2" variant='light'>Public Repos: {public_repos}</Badge>
                        <Badge className="mr-2 mb-2" variant='dark'>Public Gists: {public_gists}</Badge>              
                    </Card.Body>
                </Card> 
                <div className="mt-3">
                {
                    userRepos.length > 0
                        ?
                            <Fragment>
                                <h3>Pinned Repositories</h3>
                                <Repos repos={userRepos}/>  
                            </Fragment>
                        :
                            <Spinner local={true}/>
                }
                </div>
            </div>
        )
    }
}

export default UserPage

