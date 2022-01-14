import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SubNavBar = styled.nav`
    width: 100%;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #003da7;

    &:hover {
        text-decoration: none;
    }
`;

const NavItem = styled.div`
    font-size: 1.25rem;
    padding: 0rem 1rem;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;
`;

const SubLink = styled(Link)`
    width: 100%;
    padding: 1rem 0rem;

    &:hover {
        text-decoration: none;
        background-color: #0046bf;

        div {
            color: white;
        }
    }
`;

const SubHeader = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 990);

    const updateMedia = () => {
        setScreenWidth(window.innerWidth <= 990);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return !screenWidth ? (
        <SubNavBar>
            <SubLink to="/products/Cellphones" style={{textDecoration: 'none'}}>
                <NavItem>
                    <i className="fas fa-mobile-alt" style={{ marginRight: '0.5rem' }}></i>
                    Phones
                </NavItem>
            </SubLink>
            <SubLink to="/products/Headphones" style={{textDecoration: 'none'}}>
                <NavItem>
                    <i className="fas fa-headphones" style={{ marginRight: '0.5rem' }}></i>
                    HeadPhones
                </NavItem>
            </SubLink>
            <SubLink to="/products/Tablet" style={{textDecoration: 'none'}}>
                <NavItem >
                    <i className="fas fa-tablet-alt" style={{ marginRight: '0.5rem' }}></i>
                    Tablets
                </NavItem>
            </SubLink>
        </SubNavBar>
    ) : null
}

export default SubHeader;