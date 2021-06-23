import React from "react";
import SaveBtn from '../../assets/svgs/save-new.svg'

const Card = ({ image, title, reads, author}) =>{
    return(
        <article className="card">
            <img src={image} alt="celebrity" className="card__image" id="header"></img>
            <img src={SaveBtn} alt="Save news btn" id="btnSave" className="card__btnSave"></img>
            <p className="card__title" id="title">{title}</p>
            <p className="card__reads" id="footer">{author} {reads}</p>
            
        </article>
    )
}

export default Card;