import React from "react";


const Card = ({image, title}) =>{
    return(
        
        <article className="card"
        style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize:'cover'
        }}
        >
            <div className="card__footer">
                <p className="card__footer__title" id="title">{title}</p>
            </div>
        </article>
        
    )
}

export default Card;