// Import libraries
import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Import logo
import Logo from "../../assets/images/logo.png";
// Import actions
import { logout } from '../../redux/actions/authActions';

const Component = ({ logout }) =>{
  return (
    <section className="header">
      <Link to="/">
        <img src={Logo} alt="Logo People news" />
      </Link>
      <a href="javascript;" onClick={() => logout()} className="logout">
        Logout
      </a>
    </section>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout())
  }
});

export const Header = connect(null, mapDispatchToProps)(Component);