import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import { getAllRepositories } from '../lib/api';
import classes from './Content.module.scss';
import ReposContainer from './ReposContainer';
import ReposMessage from './ReposMessage';
import Search from './Search';
import LoadingSpinner from './UI/LoadingSpinner';
import UserDashboard from './UserDashboard';

const Content = () => {
	const [reposVisible, setReposVisible] = useState(false);
	const [reposLoaded, setReposLoaded] = useState(false);
	const [gitHubUser, setGitHubUser] = useState(null);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);

	const defaultMessage = 'Search for a user to list owned repositories';

	useEffect(() => {
		setMessage(defaultMessage);
	}, []);

	// const {
	// 	sendRequest: sendUserRequest,
	// 	status: userStatus,
	// 	error: userError,
	// 	data: loadedUser,
	// } = useHttp(getUser);

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
		setReposVisible(false);
		setReposLoaded(false);
		setGitHubUser(null);
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
		setReposVisible(false);
		setReposLoaded(false);

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

	const {
		sendRequest: sendReposRequest,
		status: reposStatus,
		error: reposError,
		data: loadedRepos,
	} = useHttp(getAllRepositories);

	const fetchReposHandler = async username => {
		if (reposVisible) {
			setReposVisible(false);
			return;
		}
		if (!reposLoaded) {
			sendReposRequest(username);
			setReposLoaded(true);
		}
		setReposVisible(true);
	};

	const renderRepos = () => {
		let repos;

		if (reposStatus === 'pending') {
			repos = (
				<div>
					<LoadingSpinner />
				</div>
			);
		}

		if (reposStatus === 'error') {
			repos = <p>{reposError}</p>;
		}

		if (reposStatus === 'completed' && loadedRepos && loadedRepos.length > 0) {
			repos = <ReposContainer repos={loadedRepos} />;
		}

		if (
			reposStatus === 'completed' &&
			(!loadedRepos || loadedRepos.length === 0)
		) {
			repos = (
				<div>
					<p>No repositories were found!</p>
				</div>
			);
		}

		return repos;
	};

	return (
		<div className={classes.content}>
			<Search onUserSearch={userSearchHandler} />
			{gitHubUser && (
				<UserDashboard
					user={gitHubUser}
					onClickFetchRepos={fetchReposHandler}
					reposVisible={reposVisible}
				/>
			)}
			<ReposMessage message={message} isError={isError} />
			{reposVisible && renderRepos()}
		</div>
	);
};

export default Content;
