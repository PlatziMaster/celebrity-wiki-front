import React from "react";
import { SearchBar } from "../UI/SearchBar/SearchBar";
import { Menu } from "../Menu/Menu";

import Logo from "../../assets/images/logo.png";

const Header = () =>{
    return (
        <section className="header">
            <a href="/"><img src={Logo} alt="Logo People news"></img></a>
            <SearchBar></SearchBar>
            <Menu></Menu>
        </section>
    )
}

export default Header;