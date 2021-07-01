// Import libraries
import { gql } from "apollo-boost";

export const GET_ALL_CELEBRITIES = gql`
  query GetAllCelebrities {
    getCelebrities {
      _id
      name
      Image
    }
  }
`;

export const GET_CELEBRITY_BY_ID = gql`
  query GetAllCelebrityById($id: ID!) {
    getCelebritie(id: $id) {
      _id
      name
      gender
      age
      height
      birthday
      net_worth
      occupation
      nationality
      bio
      Image
    }
  }
`;

export const GET_ALL_ARTISTS = gql`
  query getArtists {
    getArtists {
      _id
      Artist_name
      Image
      Analysis {
        Happiest {
          song_name
        }
        Saddest {
          song_name
        }
      }
    }
  }
`;

export const GET_ARTIST_BY_ID = gql`
  query getArtistById($id: ID!) {
    getArtist(id: $id) {
      _id
      Artist_name
      Albums_and_songs {
        Id
        Tracks_ids {
          id
          song_name
        }
        Album_name
        Total_tracks
        Total_duration_in_minutes
      }
      Image
      Analysis {
        Happiest {
          song_name
        }
        Saddest {
          song_name
        }
      }
      Total_albums  
    }
  }
`;
