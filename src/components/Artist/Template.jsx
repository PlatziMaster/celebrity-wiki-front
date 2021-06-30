import React from "react";

export const Template = ({ artist, loading }) => (
  <div className="artist">
    <figure>
      <img src={artist.Image} alt="nothing" />
    </figure>
    <div className="artist-info">
      <h2 className="artist--name">{artist.Artist_name}</h2>
      <ul className="artist-info__songs">
        <li><b>Saddest song: </b>{artist.Analysis.Saddest.song_name}</li>
        <li><b>Happiest song: </b>{artist.Analysis.Happiest.song_name}</li>
        <li><b>total albums: </b>{artist.Total_albums}</li>
      </ul>
      <div className="album-container">
        {artist.Albums_and_songs.map(album => (
          <div className="album-card" key={album.Id}>
            <div>
              <p>{album.Album_name}</p>
              {/* <p>{artist}</p> */}
            </div>
            <div>
              <p>{album.Total_duration_in_minutes} minutes</p>
              <p>{album.Total_tracks} tracks</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
