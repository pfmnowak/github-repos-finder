import React, { useRef } from 'react';
import Button from './Button';
import classes from './Search.module.scss';

const Search = props => {
	const searchRef = useRef();

	const submitSearchFormHandler = event => {
		event.preventDefault();
		props.onUserSearch(searchRef.current.value);
		searchRef.current.blur();
	};

	const focusInputHandler = () => {
		if (!searchRef.current) return;
		searchRef.current.value = '';
	};

	return (
		<form className={classes.search} onSubmit={submitSearchFormHandler}>
			<input
				ref={searchRef}
				type="search"
				className={classes.search__input}
				placeholder="Search GitHub user"
				onFocus={focusInputHandler}
				autoFocus
			/>
			<div className={classes.search__button}>
				<Button type="submit">Search</Button>
			</div>
		</form>
	);
};

export default Search;
