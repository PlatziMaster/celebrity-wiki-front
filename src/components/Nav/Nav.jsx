// Import libraries
import React from "react";
import { connect } from 'react-redux';
// Import actions
import { selectCategory } from '../../redux/actions/celebritiesActions';

export const Component = ({ category, selectCategory }) => (
  <section className="nav">
    <p
      className={category === 'celebrities' ? 'nav__item nav__item--active' : 'nav__item'}
      onClick={() => selectCategory('celebrities')}
    >
      Celebrities
      </p>
    <p 
      className={category === 'artists' ? 'nav__item nav__item--active' : 'nav__item'}
      onClick={() => selectCategory('artists')}
    >
      Artists
    </p>
  </section>
);

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  selectCategory(category) {
    dispatch(selectCategory(category))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  category: state.celebritiesReducer.category,
});

export const Nav = connect(mapStateToProps, mapDispatchToProps)(Component);