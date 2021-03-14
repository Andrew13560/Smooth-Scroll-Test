import React from 'react';
// https://react-icons.github.io/react-icons/
import { FaBars } from 'react-icons/fa';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Jack Mobile Home Park
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {/* Where we will put items in the nav menu */}
                    <NavMenu>
                        {/* Change the to= '' when finished */}
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Listings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* The buttons will use React router */}
                    <NavBtn>
                        <NavBtnLink to="signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
