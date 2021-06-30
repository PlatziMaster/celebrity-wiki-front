// Import libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import Card from "../../components/Card/Card";
import { HomeCard } from "../../components/UI/HomeCard/HomeCard";
import { Spinner }  from "../UI/Spinner/Spinner";
// Import custom hooks
import { useGetCelebrities } from '../../customHooks/useGetCelebrities';
// Import actions
import { setCelebrities, setFilterCelebrities } from '../../redux/actions/celebritiesActions';

export const Component = ({ celebritiesFilter, setCelebrities, setFilterCelebrities }) => {
  // Get celebrities data from custom hook
  const { celebrities, isLoaded } = useGetCelebrities();

  console.log(celebrities);
  console.log(isLoaded);
  // Set celebrities data from api data
  useEffect(() => {
    setCelebrities(celebrities);
    setFilterCelebrities(celebrities);
  }, [setCelebrities, setFilterCelebrities, celebrities])

  return (
    <>
      {!isLoaded ? 
      <div className="container-spinner">
        <Spinner classStyle="spinner-orange"/>
      </div> : ""}
      {celebritiesFilter.length > 0 && <HomeCard celebrity={celebritiesFilter[0]}/>}
      <section className="cards">
      
        {celebritiesFilter.length > 1 && celebritiesFilter.slice(1, celebritiesFilter.length - 1).map(celebrity => (
          
          <Card 
            key={celebrity._id}
            id={celebrity._id} 
            image={celebrity.Image} 
            title={celebrity.name} 
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
export const Home = connect(mapStateToProps, mapDispatchToProps)(Component);