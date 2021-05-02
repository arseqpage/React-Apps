import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from './img/search.svg';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <label className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Найти любимое блюдо..."
      />
      <SearchIcon className={styles.search__icon} />
    </label>
  );
};

Search.propTypes = {
  text: PropTypes.string,
};

export default Search;
