import React from "react";
import { Link } from 'react-router-dom';
import { SearchBar } from "../UI/SearchBar/SearchBar";
import { Menu } from "../Menu/Menu";

import Logo from "../../assets/images/logo.png";

const Header = () =>{
    return (
        <section className="header">
            <Link to="/"><img src={Logo} alt="Logo People news"></img></Link>
            <SearchBar></SearchBar>
            <Menu></Menu>
        </section>
    )
}

export default Header;