import React from 'react';

export const Template = ({ celebrity }) => (
  <div className="celebrity">
    <div className="celebrity-header">
      {/* header */}
    </div>
    <div className="celebrity__content">
      <figure>
        <img src={celebrity.Image} alt={celebrity.name} />
      </figure>
      <div className="celebrity__text">
        <h2>
          {celebrity.name}<p></p>
        </h2>
        <p className="celebrity__content--date">05/07/2003</p>
        <p className="celebrity__content--text">
          {celebrity.bio}
        </p>
      </div>
    </div>
  </div>
)