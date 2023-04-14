import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { LogoutButton } from "../components";

import CloudstoreLogo from '../static/cloudstore-logo.png';

function HomeNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <img
                            src={CloudstoreLogo}
                            height="30"
                            className="mx-3 d-inline-block align-top d-none d-lg-block"
                            alt="Cloudstore logo"
                        />
                    </Navbar.Collapse>
                    <div className="d-none d-lg-block">
                        <h3 className="m-0">Cloudstore</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        {/* add necessary */}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <div className="d-flex justify-content-around">
                        <LogoutButton />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomeNavbar;