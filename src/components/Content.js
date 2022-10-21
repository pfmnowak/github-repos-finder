import React, { useEffect, useState } from 'react';
import classes from './Content.module.scss';
import ReposContainer from './ReposContainer';
import ReposMessage from './ReposMessage';
import Search from './Search';
import UserDashboard from './UserDashboard';

const Content = () => {
	const [repos, setRepos] = useState(null);
	const [gitHubUser, setGitHubUser] = useState(null);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);

	const defaultMessage = 'Search for a user to list owned repositories';

	useEffect(() => {
		setMessage(defaultMessage);
	}, []);

	const userSearchHandler = username => {
		if (!username) {
			resetState();
			return;
		}
		getUserData(username);
	};

	const resetState = () => {
		setMessage(defaultMessage);
		setIsError(false);
		setRepos(null);
		setGitHubUser(null);
	};

	const fetchRepos = async user => {
		const api_call = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=100&sort=updated&order=desc`
		);
		const data = await api_call.json();
		return { data };
	};

	const fetchReposHandler = async username => {
		const { data: resData } = await fetchRepos(username);

		if (!Array.isArray(resData) || resData.length === 0) {
			return;
		}

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
	};

	const fetchUser = async user => {
		return fetch(`https://api.github.com/users/${user}`)
			.then(response => response.json())
			.then(response => {
				return response;
			});
	};

	const getUserData = async searchedUser => {
		const fetchedUser = await fetchUser(searchedUser);
		setRepos(null);

		if (fetchedUser.message && fetchedUser.message === 'Not Found') {
			setMessage('User does not exist!');
			setIsError(true);
			setGitHubUser(null);
			return;
		}

		setMessage(null);
		setIsError(false);
		setGitHubUser({
			avatarUrl: fetchedUser.avatar_url,
			login: fetchedUser.login,
			name: fetchedUser.name,
			bio: fetchedUser.bio,
			location: fetchedUser.location,
			blogUrl: fetchedUser.blog,
			profileUrl: fetchedUser.html_url,
			publicRepos: fetchedUser.public_repos,
			followers: fetchedUser.followers,
			following: fetchedUser.following,
			email: fetchedUser.email,
			company: fetchedUser.company,
			twitterUsername: fetchedUser.twitter_username,
		});
	};

	return (
		<div className={classes.content}>
			<Search onUserSearch={userSearchHandler} />
			{gitHubUser && (
				<UserDashboard
					user={gitHubUser}
					onClickFetchRepos={fetchReposHandler}
				/>
			)}
			<ReposMessage message={message} isError={isError} />
			<ReposContainer repos={repos} />
		</div>
	);
};

export default Content;
