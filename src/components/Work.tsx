import './css-files/Work.css'
import {Container, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Work = () => {
    return (
        <div className="work py-5">
            <Container className="d-flex flex-column align-items-center">
                <Card className="my-3" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>Example Project</Card.Title>
                        <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. Yeah this is just filler text to fill out this box more yeahhhh, I love chocolate.
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem>Tech Stack Used:</ListGroupItem>

                        <ListGroupItem>React</ListGroupItem>

                        <ListGroupItem>ASP.NET Core</ListGroupItem>

                        <ListGroupItem>PostgreSQL</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                        <Card.Link href="#">Project Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="my-3" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>Example Project</Card.Title>
                        <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. Yeah this is just filler text to fill out this box more yeahhhh, I love chocolate.
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem>Tech Stack Used:</ListGroupItem>

                        <ListGroupItem>React</ListGroupItem>

                        <ListGroupItem>ASP.NET Core</ListGroupItem>

                        <ListGroupItem>PostgreSQL</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                        <Card.Link href="#">Project Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="my-3" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>Example Project</Card.Title>
                        <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. Yeah this is just filler text to fill out this box more yeahhhh, I love chocolate.
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem>Tech Stack Used:</ListGroupItem>

                        <ListGroupItem>React</ListGroupItem>

                        <ListGroupItem>ASP.NET Core</ListGroupItem>

                        <ListGroupItem>PostgreSQL</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                        <Card.Link href="#">Project Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Work;