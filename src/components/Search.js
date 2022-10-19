import React from 'react';
import classes from './Search.module.scss';

const Search = () => {
	return (
		<div className={classes.search}>
			<input
				type="text"
				className={classes.search__input}
				placeholder="Search GitHub user"
			/>
			<button type="button" className={classes.search__button}>
				Search
			</button>
		</div>
	);
};

export default Search;
