// Import libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import Card from "../../components/Card/Card";
// Import custom hooks
import { useGetArtists } from '../../customHooks/useGetArtists';
// Import actions
import { setCelebrities, setFilterCelebrities } from '../../redux/actions/celebritiesActions';

export const Component = ({ celebritiesFilter, setCelebrities, setFilterCelebrities }) => {
  // Get celebrities data from custom hook
  const { artists } = useGetArtists();
  // Set celebrities data from api data
  useEffect(() => {
    setCelebrities(artists);
    setFilterCelebrities(artists);
  }, [setCelebrities, setFilterCelebrities, artists])

  return (
    <>
      <section className="cards">
        {celebritiesFilter.map(celebrity => (
          <Card 
            key={celebrity._id}
            id={celebrity._id} 
            image={celebrity.Image} 
            title={celebrity.name}
            type={'artists'}
          ></Card>
        ))}
      </section>
    </>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  setCelebrities(celebrities) {
    dispatch(setCelebrities(celebrities))
  },
  setFilterCelebrities(celebrities) {
    dispatch(setFilterCelebrities(celebrities))
  },
});

// Map state from global state to component props
const mapStateToProps = state => ({
  celebritiesFilter: state.celebritiesReducer.celebritiesFilter,
});

// Connect component with Redux
export const HomeArtists = connect(mapStateToProps, mapDispatchToProps)(Component);