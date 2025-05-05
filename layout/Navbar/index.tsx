import React from 'react'
import { NavbarWrapper } from './Navbar.styles'
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <NavbarWrapper>
            Navbar
                <IoExitOutline style={{cursor:"pointer", color:"lightgray"}} size={30} />
        </NavbarWrapper>
    )
}

export default Navbar