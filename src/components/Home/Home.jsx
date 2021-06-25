// Import libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import Card from "../../components/Card/Card";
// Import mock data
import data from '../../celebrities.json';
// Import actions
import { setCelebrities } from '../../redux/actions/celebritiesActions';

export const Component = ({ celebrities, setCelebrities }) => {
  // Set celebrities data from mock data
  useEffect(() => {
    setCelebrities(data);
  }, [setCelebrities])
  
  return (
    celebrities.map(celebrity => (
      <Card 
        key={celebrity.id} 
        image={celebrity.image} 
        title={celebrity.name} 
        reads={celebrity.age} 
        author="Mary Walton"
      ></Card>
    ))
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  setCelebrities(celebrities) {
    dispatch(setCelebrities(celebrities))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  celebrities: state.celebritiesReducer.celebrities,
});

// Connect component with Redux
export const Home = connect(mapStateToProps, mapDispatchToProps)(Component);