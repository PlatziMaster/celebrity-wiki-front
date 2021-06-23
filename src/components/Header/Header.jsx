import React from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import Menu from "../Menu/Menu";

import Logo from "../../assets/images/logo.png";

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