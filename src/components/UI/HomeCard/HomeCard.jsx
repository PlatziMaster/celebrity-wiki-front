// Import Libraries
import React from "react";
// Import custom hooks
import { useGetCelebrities } from '../../../customHooks/useGetCelebrities';

const HomeCard = () =>{
    // Get celebrities data from custom hook
    const { celebrities } =  useGetCelebrities();
    
    return (
        <article className="homeCard">
            <img src={celebrities[1].Image} alt="Home card celebrity" className="homeCard__img"></img>
            <div className="homeCard__info">
                <h3 className="homeCard__info-title">{celebrities[1].name}</h3>
                <div className="homeCard__info-bio">
                    <p>{celebrities[1].bio}</p>
                    <p><b>Age: </b>{celebrities[1].age}</p>
                    <p><b>Occupation: </b> 
                    {
                        celebrities[1].occupation.map(occupation =>(
                            occupation + ", "
                        ))}
                    </p>
                    <p><b>Height: </b> {celebrities[1].height} </p>
                </div>
            </div>
        </article>
    )
}

export default HomeCard