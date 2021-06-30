import React from 'react';

export const Template = ({ celebrity, loading })  => (
  <div className="celebrity">
    <figure className="celebrity-image">
      <img src={celebrity.Image} alt={celebrity.name} />
    </figure>
    <div className="celebrity-desc">
      <h2>{celebrity.name}</h2>
      <ul className="celebrity-desc__dates">
        <li><b>Age: </b>{celebrity.age}</li>
        <li><b>Height: </b>{celebrity.height}</li>
        <li><b>Ocupation: </b>{celebrity.occupation}</li>
        <li><b>Nationality: </b>{celebrity.nationality}</li>
      </ul>
      <p className="celebrity-desc--bio">{celebrity.bio}</p>
    </div>
  </div>
)