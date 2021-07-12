// Import libraries
import React, { useState } from "react";
import { connect } from 'react-redux';
// Import icons
import searchIcon from "../../../assets/svgs/search.svg";
// Import actions
import { setFilterCelebrities } from '../../../redux/actions/celebritiesActions';

const Component = ({ celebrities, setFilterCelebrities }) => {
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
  // CR: Filter not will work with accents
  const filterCelebrities = (newFilterWord) => {
    setFilterWord(newFilterWord);
    setFilterCelebrities(celebrities.filter(celebrity => {
      const celebrityName = celebrity.name.toLowerCase();
      return celebrityName.includes(newFilterWord.toLocaleLowerCase());
    }))
  }

  return(
    <section className="search">
      <label className="search__paragraph">Find your favorite Celebrity</label>

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
  setFilterCelebrities(celebrities) {
    dispatch(setFilterCelebrities(celebrities))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  celebrities: state.celebritiesReducer.celebrities,
});

// Connect component with Redux
export const SearchBar = connect(mapStateToProps, mapDispatchToProps)(Component);
