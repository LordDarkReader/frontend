import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavUp() {

    return (
        <Navbar collapseOnSelect expand="lg"   style={{background: '#FFFFFF'}}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <p>User name: </p>
                        </div>
                        <div>
                            <h2>Dupex</h2>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavUp;