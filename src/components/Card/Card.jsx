// Import libraries
import React from "react";
import { Link } from 'react-router-dom';

export const Card = ({ id, image, title, type }) =>{
    return(
        <Link to={type === 'celebrity' ? `/celebrity/${id}` : `/artist/${id}`}>
            <article className="card">
                <img src={image} alt={title} className="card__image" />
                <p className="card__title">{title}</p>
            </article>
        </Link>
    )
}
