// Import libraries
import React from "react";
import { connect } from 'react-redux';
// Import icons
import Categories from "../../assets/svgs/categories.svg";
import NewsGreen from "../../assets/svgs/news-green.svg";
// Import actions
import { logout } from '../../redux/actions/authActions';

export const Component = ({ logout }) => (
  <section className="menu">
    <div className="menu__item">
      <img src={NewsGreen} alt="Icon Celebrity news" className="menu__icon"/>
      <a href="/">Celebrity</a>
    </div>
    <div className="menu__item">
      <img src={Categories} alt="Icon Categories" className="menu__icon"></img>
      <a href="/">Categories</a>
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
  }
});

export const Menu = connect(null, mapDispatchToProps)(Component);