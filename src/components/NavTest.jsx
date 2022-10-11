import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from 'react-router-dom';

function NavTest() {
    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg"  style={{background: '#dc0a31'}}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Management" id="collasible-nav-dropdown" className="dupa" >
                            <NavDropdown.Item onClick={() => navigate('/packages')}>PAK</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/jackpot')}>jackpot</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/test-connection')}>Test connection</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/test-connection-query')}>Test connection query</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/test-connection-mutation')}>Test connection mutation</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reports" style={{color: 'white'}} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">BU</NavDropdown.Item>
                            <NavDropdown.Item href="#">Pak</NavDropdown.Item>
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