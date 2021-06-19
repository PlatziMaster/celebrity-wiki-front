import React from "react";
import searchIcon from "../assets/icons/search.svg";
import "../styles/components/home/_searchBar.scss"

const SearchBar =() =>{
   return(
    <section className="search">
        <p className="search__paragraph">Find your favorite Celebrity</p>

        <div className="search__group">
            <img src={searchIcon} className="search__group__icon" alt="Icon Search Celebrity"></img>
            <input type="text" className="search__group__input"/>
        </div>
    </section>
   )
}

export default SearchBar;

