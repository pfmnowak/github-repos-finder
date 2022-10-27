import React, { useRef } from 'react';
import Button from './Button';
import classes from './Search.module.scss';

const Search = props => {
	const searchRef = useRef();

	const submitSearchFormHandler = event => {
		event.preventDefault();
		props.onUserSearch(searchRef.current.value);
	};

	const focusInputHandler = () => {
		searchRef.current.value = '';
	};

	return (
		<form className={classes.search} onSubmit={submitSearchFormHandler}>
			<input
				ref={searchRef}
				type="text"
				className={classes.search__input}
				placeholder="Search GitHub user"
				onFocus={focusInputHandler}
			/>
			<Button type="submit">Search</Button>
		</form>
	);
};

export default Search;
