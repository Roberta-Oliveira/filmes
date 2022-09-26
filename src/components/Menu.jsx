import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                       <Nav className="me-auto">
                          <Link className="nav-link" to="/arrays">Arrays</Link>
                          <Link className="nav-link" to="/objetos">Objetos</Link>
                          <Link className="nav-link" to="/hello-world">Hello World</Link>   
                          <Link className="nav-link" to="/inicial">Página Inicial</Link>
                          <Link className="nav-link" to="/page2">Roberta Avelino</Link>
                          <Link className="nav-link" to="/tabela">Tabela</Link>
                          <Link className="nav-link" to="/estados">Estados</Link>
                          <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
                        </Nav>
                </Container>
            </Navbar>

        </>

    )
}

export default Menu
