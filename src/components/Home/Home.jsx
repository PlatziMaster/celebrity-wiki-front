// Import libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import Card from "../../components/Card/Card";
import { Spinner }  from "../UI/Spinner/Spinner";
// Import custom hooks
import { useGetCelebrities } from '../../customHooks/useGetCelebrities';
// Import actions
import { setCelebrities, setFilterCelebrities } from '../../redux/actions/celebritiesActions';

export const Component = ({ celebritiesFilter, setCelebrities, setFilterCelebrities }) => {
  // Get celebrities data from custom hook
  const { celebrities, loading } = useGetCelebrities();

  // Set celebrities data from api data
  useEffect(() => {
    setCelebrities(celebrities);
    setFilterCelebrities(celebrities);
  }, [setCelebrities, setFilterCelebrities, celebrities])

  if (loading) {
    return (
      <div className="container-spinner">
        <Spinner classStyle="spinner-orange"/>
      </div>
    )
  }

  return (
    <section className="cards">
      {celebritiesFilter.map(celebrity => (
        <Card 
          key={celebrity._id}
          id={celebrity._id} 
          image={celebrity.Image} 
          title={celebrity.name} 
          type={'celebrity'}
        ></Card>
      ))}
    </section>
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
export const Home = connect(mapStateToProps, mapDispatchToProps)(Component);