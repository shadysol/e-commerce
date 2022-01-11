import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import styled from 'styled-components';

const Brand = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
`;

const AddWhiteColor = styled.div`
    color: white;
    margin-right: 0.5rem;
    display: flex;
`;

const YourCartText = styled.div`
    font-size: 0.7rem;
    font-weight: 700;
    margin-left: 8px;
    @media (max-width: 990px) {
        display: inline;
    }
`;






const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      
      <Navbar  variant='dark'  expand="lg" collapseOnSelect style={{backgroundColor: '#0046bf'}}>
      <Container classname="head">
      
          <LinkContainer to='/'>
            
            <Navbar.Brand >
            <Brand>
            PROSHOP
              </Brand>
              </Navbar.Brand>
            
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox />
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link >
                   
                  <AddWhiteColor>
                  <i className='fas fa-shopping-cart' style={{ marginRight: 8, fontSize: '1.2rem'}}></i>  Cart
                  </AddWhiteColor>
                </Nav.Link> 
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                     
                      Profile
                     
                      </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <AddWhiteColor>
                    <i className='fas fa-user' style={{ marginRight: 8, fontSize: '1.2rem'}}></i>
                                Sign In
                    </AddWhiteColor>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' style={{ marginRight: 8, fontSize: '1.2rem', color: 'black' }}>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
         </Container>
      </Navbar>
    </header>
  )
}

export default Header