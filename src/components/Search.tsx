import React, { useRef } from 'react';
import classes from './Search.module.scss';
import SearchButton from './SearchButton';

type SearchProps = {
	onUserSearch: (username: string) => void;
};

const Search = (props: SearchProps) => {
	const searchRef = useRef<HTMLInputElement>(null);

	const submitSearchFormHandler = (event: React.FormEvent) => {
		event.preventDefault();
		props.onUserSearch(searchRef.current!.value);
		searchRef.current!.blur();
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
			<SearchButton />
		</form>
	);
};

export default Search;
