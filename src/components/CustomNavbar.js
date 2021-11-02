import {Nav, Navbar, NavDropdown} from "react-bootstrap";


export default function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                    <NavDropdown title="Stock" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/project">List</NavDropdown.Item>
                        <NavDropdown.Item href="/project/create">Register</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Dashboards" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/List">List</NavDropdown.Item>
                        <NavDropdown.Item href="/Create">Create</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
