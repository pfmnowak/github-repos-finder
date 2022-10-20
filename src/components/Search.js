import React, { useRef } from 'react';
import classes from './Search.module.scss';

const Search = props => {
	const searchRef = useRef();

	const submitSearchFormHandler = event => {
		event.preventDefault();
		props.onUserSearch(searchRef.current.value);
	};

	return (
		<form className={classes.search} onSubmit={submitSearchFormHandler}>
			<input
				ref={searchRef}
				type="text"
				className={classes.search__input}
				placeholder="Search GitHub user"
			/>
			<button type="submit" className={classes.search__button}>
				Search
			</button>
		</form>
	);
};

export default Search;
