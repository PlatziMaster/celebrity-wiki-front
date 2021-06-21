import React from "react";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

import Logo from "../assets/images/Logo.png";

const Header = () =>{
    return (
        <section className="header">
            <img src={Logo} alt="Logo People news"></img>
            <SearchBar></SearchBar>
            <Menu></Menu>
        </section>
    )
}

export default Header;