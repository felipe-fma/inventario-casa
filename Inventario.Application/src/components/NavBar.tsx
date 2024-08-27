import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink className="nav-link" to="/itens">
                            Listagem
                        </NavLink>
                        <NavLink className="nav-link" to="/item">
                            Novo
                        </NavLink>
                        <Nav.Link href="#link">Relatorio</Nav.Link>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Sistema para acompanhar os produtos da casa
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
