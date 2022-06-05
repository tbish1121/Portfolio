import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
    //<Link to="/">Home</Link>
    //<Link to="work">Work</Link>
    //<Link to="contact">Contact</Link>
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Taylor Bish</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="work">
                            <Nav.Link href="">Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                            <Nav.Link href="">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;