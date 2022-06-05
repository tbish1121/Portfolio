import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" className="me-auto d-flex justify-content-between">
                <Container>
                    <Navbar.Brand className="fs-3" href="">Taylor Bish</Navbar.Brand>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link className="fs-4" href="">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="work">
                            <Nav.Link className="fs-4" href="">Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                            <Nav.Link className="fs-4" href="">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;