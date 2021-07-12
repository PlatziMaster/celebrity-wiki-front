import { Link } from 'react-router-dom';

export const HomeCard = ({ celebrity }) => (
    <article className="homeCard">
        <Link to={`/celebrity/${celebrity._id}`}>
            <img src={celebrity.Image} alt="Home card celebrity" className="homeCard__img"></img>
        </Link>
        <div className="homeCard__info">
            <h3 className="homeCard__info-title">{celebrity.name}</h3>
            <div className="homeCard__info-bio">
                <p>{celebrity.bio}</p>
                <p><b>Age: </b>{celebrity.age}</p>
                <p><b>Occupation: </b> 
                {/* CR: celebrity.occupation.join(',') */}
                {
                    celebrity.occupation.map(occupation => (
                        occupation + ", "
                    ))}
                </p>
                <p><b>Height: </b> {celebrity.height} </p>
            </div>
        </div>
    </article>
)
