import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand>
     <Link to={'/'}style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
      <i class="fa-solid fa-video fa-beat-fade text-warning me-3"></i>
     video Player </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header