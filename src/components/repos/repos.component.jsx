import React, {Fragment} from 'react'
import {Row, Col, Card ,Badge} from 'react-bootstrap'
const Repos = ({repos}) => {
    repos = repos.slice(0,4)
    return (
        <Row >
            {
                repos.map((repo,index)=>(
                    <Col key={index} >
                        <Card>
                            <Card.Body>
                                <Card.Title><a rel="noreferrer" target="_blank" href={repo.link}>{repo.repo}</a></Card.Title>
                                <Card.Text>
                                    {repo.description}
                                    <div className="mb-0 mt-2" style={{display:"flex",justifyContent:"space-between"}}>
                                        <span className="align-middle">
                                        <Badge  variant='warning'>{repo.language}</Badge>
                                        </span>
                                        <div>
                                            {repo.stars > 0 ? <Fragment><i className="far fa-star"></i> {repo.stars} </Fragment> : ""}
                                            {repo.forks > 0 ? <Fragment><i class="fas fa-code-branch"></i> {repo.forks}</Fragment> : ""}
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Repos
