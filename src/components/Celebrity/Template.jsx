import React from "react";

export const Template = ({ celebrity, loading }) => (
  <div className="celebrity">
    <div className="celebrity-info">
      <ul className="celebrity-info__list">
        <li>
          <b>Nationality:</b>
          <p>{celebrity.nationality === undefined ? "no definido" : celebrity.nationality}</p>
        </li>
        <li>
          <b>Gender:</b>
          <p>{celebrity.gender === undefined ? "no definido" : celebrity.gender  }</p>
        </li>
        <li>
          <b>Height:</b>
          <p>{celebrity.height === undefined ? "no definido" : celebrity.height}</p>
        </li>
        <li>
          <b>Birth date:</b>
          <p>{celebrity.birthday === undefined ? "no definido" : celebrity.birthday  }</p>
        </li>
        <li>
          <b>Age:</b>
          <p>{celebrity.age === undefined ? "no definido" : celebrity.age}</p>
        </li>
        <li>
          <b>Net worth:</b>
          <p>{celebrity.net_worth === undefined ? "no definido" : celebrity.net_worth}</p>
        </li>
        <li>
          <b>Ocuppation:</b>
          <p>{celebrity.occupation === undefined ? "no definido" : celebrity.occupation  }</p>
        </li>
      </ul>
    </div>
    <div className="celebrity-header">
      <div className="celebrity-header__name">
        <h2>{celebrity.name}</h2>
        <p>{celebrity.occupation}</p>
      </div>
      <figure>
        <img src={celebrity.Image} alt="celebrity imae" />
      </figure>
    </div>
    <p className="celebrity--bio">{celebrity.bio}</p>
  </div>
);
