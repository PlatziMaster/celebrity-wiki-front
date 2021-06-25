// Import libraries
import React, { useState } from "react";
import { connect } from 'react-redux';
// Import icons
import searchIcon from "../../../assets/svgs/search.svg";
// Import mock data
import data from '../../../celebrities.json';
// Import actions
import { setCelebrities } from '../../../redux/actions/celebritiesActions';

const Component = ({ setCelebrities }) => {
  /** 
   * @constant - Value of word that was typing from user.
   * @type {string} 
   */
  const [filterWord, setFilterWord] = useState('');
  
  /**
   * @function filterCelebrities
   * @param {string} newFilterWord
   * Set new filter word and filter all celebrities that match with the filter word.
   */
  const filterCelebrities = (newFilterWord) => {
    setFilterWord(newFilterWord);
    setCelebrities(data.filter(celebrity => {
      const celebrityName = celebrity.name.toLowerCase();
      return celebrityName.includes(newFilterWord.toLocaleLowerCase());
    }))
  }

  return(
    <section className="search">
      <p className="search__paragraph">Find your favorite Celebrity</p>

      <div className="search__group">
        <img src={searchIcon} className="search__group__icon" alt="Icon Search Celebrity"></img>
        <input 
          type="text" 
          className="search__group__input"
          value={filterWord}
          onChange={({ target }) => filterCelebrities(target.value)}
        />
      </div>
    </section>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  setCelebrities(celebrities) {
    dispatch(setCelebrities(celebrities))
  }
});

// Connect component with Redux
export const SearchBar = connect(null, mapDispatchToProps)(Component);
