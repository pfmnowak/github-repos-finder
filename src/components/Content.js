import React, { useEffect, useState } from 'react';
import classes from './Content.module.scss';
import ReposContainer from './ReposContainer';
import ReposMessage from './ReposMessage';
import Search from './Search';

const Content = () => {
	const [repos, setRepos] = useState([]);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);

	const userSearchHandler = username => {
		if (!username) {
			setMessage(defaultMessage);
			setIsError(false);
			setRepos(null);
			return;
		}
		getData(username);
		setRepos(repos);
	};

	const defaultMessage = 'Search for a user to list owned repositories';

	useEffect(() => {
		setMessage(defaultMessage);
	}, []);

	const fetchUsers = async user => {
		const api_call = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=100&sort=updated&order=desc`
		);

		const data = await api_call.json();
		return { data };
	};

	const getData = async searchedUser => {
		const { data: resData } = await fetchUsers(searchedUser);

		if (!Array.isArray(resData)) {
			setMessage('User does not exist!');
			setIsError(true);
			setRepos(null);
		} else if (resData.length == 0) {
			setMessage("User doesn't have any repositories");
			setIsError(true);
			setRepos(null);
		} else {
			setMessage(null);
			setIsError(false);
			setRepos(
				resData
					.sort((a, b) => b.stargazers_count - a.stargazers_count)
					.map(repo => {
						return {
							name: repo.name,
							language: repo.language,
							stars: repo.stargazers_count,
							link: repo.html_url,
						};
					})
			);
		}
	};

	return (
		<div className={classes.content}>
			<Search onUserSearch={userSearchHandler} />
			<ReposMessage message={message} isError={isError} />
			<ReposContainer repos={repos} />
		</div>
	);
};

export default Content;
