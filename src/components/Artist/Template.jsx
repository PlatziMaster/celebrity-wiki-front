import React from "react";

export const Template = ({ artist, loading }) => (
 
  <section className="artist">
    <section className="artist__sideAlbums">
        <h2 className="artist__sideAlbums__title">Albums</h2>
        {artist.Albums_and_songs.map((album) => (
          <div  key={album.Id}>
            <p><b>{album.Album_name}</b></p>
            <p>{album.Total_duration_in_minutes} minutes</p>
            <p>{album.Total_tracks} tracks</p>
          </div>
        ))}
      
    </section>
    <section className="artist__info">
        <h1 className="artist__info__title">{artist.Artist_name}</h1>
        <img className="artist__info__img" src={artist.Image} alt={artist.Artist_name}></img>
        <div className="artist__info__songs">
          <div className="artist__info__happy">
            <p><b>Happiest song</b></p>
            <p>{artist.Analysis.Happiest.song_name}</p>
          </div>
          <div className="artist__info__sad">
            <p><b>Saddest song</b></p>
            <p>{artist.Analysis.Saddest.song_name}</p>
          </div>
          <div className="artist__info__albums">
            <p><b>Total Albums</b></p>
            <p>{artist.Total_albums}</p>
          </div>
        </div>
    </section>
  </section>
);
