import React from 'react'
import {Link} from "react-router-dom"
import{Container,Navbar,Nav} from 'react-bootstrap'

const NavBar = () => {
    return (
    
    <div>
      
          <Navbar bg="dark" variant="dark">
          <Container>
           <Navbar.Brand href="#home">List Of Users </Navbar.Brand>

            <Nav className="me-auto">
             <Link to ="/"><Nav.Link href="#home">Home</Nav.Link></Link>  
             <Link to ="/users"><Nav.Link href="#features">Users</Nav.Link></Link>

          </Nav>
    </Container>
  </Navbar>

        </div>
        )
      }
export default NavBar
