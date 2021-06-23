import React from "react";
import Categories from "../../assets/svgs/categories.svg";
import Trends from "../../assets/svgs/trends.svg";
import NewsGreen from "../../assets/svgs/news-green.svg";

const Menu=() =>{

    return(
        <section className="menu">
            <div className="menu__item">
                <img src={NewsGreen} alt="Icon Celebrity news" className="menu__icon"/>
                <a href="/">Celebrity</a>
            </div>
            <div className="menu__item">
                <img src={Trends} alt="Icon Trends"  className="menu__icon"></img>
                <a href="/">Trends</a>
            </div>
            <div className="menu__item">
                <img src={Categories} alt="Icon Categories" className="menu__icon"></img>
                <a href="/">Categories</a>
            </div>
            <div className="menu__item">
                <a href="/">Logout</a>
            </div>

        </section>
    )

}

export default Menu;