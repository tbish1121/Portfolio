import './css-files/Work.css'
import {Container, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Work = () => {
    return (
        <div className="work mt-5 py-5">
            <Container className="d-flex flex-column align-items-center">
                <Card className="my-4 card" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">Appointment Reminder Website</Card.Title>
                        <Card.Text>
                    This website was a project I built for keeping track of doctors appointments. It was a great project to further my knowledge of both frontend, and backend.
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem className="fw-bold">Tech Stack Used:</ListGroupItem>

                        <ListGroupItem>React</ListGroupItem>

                        <ListGroupItem>Express</ListGroupItem>
                        
                        <ListGroupItem>PrismaORM</ListGroupItem>

                        <ListGroupItem>PostgreSQL</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                        <Card.Link target="_blank" href="https://github.com/tbish1121/Appointment-Reminder">Project Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Work;