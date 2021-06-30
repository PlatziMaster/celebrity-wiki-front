// Import libraries
import React from "react";
import { connect } from 'react-redux';
// Import actions
import { logout } from '../../redux/actions/authActions';
import { selectCategory } from '../../redux/actions/celebritiesActions';

export const Component = ({ category, selectCategory, logout }) => (
  <section className="menu">
    <div className="menu__item">
      <select className="menu__select" value={category} onChange={({ target }) => selectCategory(target.value)}>
        <option value="celebrities">Celebrities</option>
        <option value="artists">Artists</option>
      </select>
    </div>
    <div className="menu__item">
      <a href="javascript;" onClick={() => logout()}>Logout</a>
    </div>
  </section>
);

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout())
  },
  selectCategory(category) {
    dispatch(selectCategory(category))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  category: state.celebritiesReducer.category,
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(Component);