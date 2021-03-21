import React, {Fragment} from 'react'
import {Card ,Badge, CardColumns} from 'react-bootstrap'
const Repos = ({repos}) => {
    // repos = repos.slice(0,4)
    return (
        <CardColumns className="mt-2" >
            {
                repos.map((repo,index)=>(
                    
                    <Card key={index} >
                        <Card.Body>
                            <Card.Title><a rel="noreferrer" target="_blank" href={repo.link}>{repo.repo}</a></Card.Title>
                            <div>
                                {repo.description}
                                <div className="mb-0 mt-2" style={{display:"flex",justifyContent:"space-between"}}>
                                    <span className="align-middle">
                                    <Badge variant='warning'>{repo.language}</Badge>
                                    </span>
                                    <div>
                                        {repo.stars > 0 ? <Fragment><i className="far fa-star"></i> {repo.stars} </Fragment> : ""}
                                        {repo.forks > 0 ? <Fragment><i className="fas fa-code-branch ml-2"></i> {repo.forks}</Fragment> : ""}
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
    
                ))
            }
        </CardColumns>
    )
}

export default Repos
