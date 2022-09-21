import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from 'react-router-dom';

function NavTest() {
    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Management" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/packages')}>PAK</NavDropdown.Item>
                            <NavDropdown.Item href="/packages">UD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">DE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">RE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">LP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">LU</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">LPR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">PG</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">S</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">PL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">UK</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">PC</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reports" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">BU</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pak</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">RUF</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">RPR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ZSZ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">HIS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => navigate('/')}>Change background</Nav.Link>
                        <Nav.Link onClick={() => navigate('/')}>Account</Nav.Link>
                        <Nav.Link onClick={() => navigate('/')}>Help</Nav.Link>
                        <Nav.Link onClick={() => navigate('/')}>Close</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTest;