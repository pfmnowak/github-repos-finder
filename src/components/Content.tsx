import { useState } from 'react';
import useHttp from '../hooks/use-http';
import { getAllRepositories, getUser } from '../lib/api';
import classes from './Content.module.scss';
import Footer from './Footer/Footer';
import ReposContainer from './ReposContainer';
import Search from './Search';
import Card from './UI/Card';
import LoadingSpinner from './UI/LoadingSpinner';
import UserDashboard from './UserDashboard';

const Content = () => {
	const [userVisible, setUserVisible] = useState(false);
	const [reposVisible, setReposVisible] = useState(false);
	const [reposLoaded, setReposLoaded] = useState(false);

	const {
		sendRequest: sendUserRequest,
		status: userStatus,
		error: userError,
		data: loadedUser,
	} = useHttp(getUser);

	const {
		sendRequest: sendReposRequest,
		status: reposStatus,
		error: reposError,
		data: loadedRepos,
	} = useHttp(getAllRepositories);

	const userSearchHandler = (username: string) => {
		setReposVisible(false);
		setReposLoaded(false);

		if (!username) {
			setUserVisible(false);
			return;
		}
		setUserVisible(true);
		sendUserRequest(username);
	};

	const fetchReposHandler = async (username: string) => {
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

	const renderUser = () => {
		if (userStatus === 'pending') {
			return (
				<div>
					<LoadingSpinner />
				</div>
			);
		}

		if (userStatus === 'error') {
			return <p className="u-center-text">{userError}</p>;
		}

		if (userStatus === 'completed' && loadedUser) {
			return (
				<>
					<Card>
						<UserDashboard
							user={loadedUser}
							onClickFetchRepos={fetchReposHandler}
							reposVisible={reposVisible}
						/>
					</Card>
				</>
			);
		}
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
			repos = <p className="u-center-text">{reposError}</p>;
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
					<p className="u-center-text">No repositories were found!</p>
				</div>
			);
		}

		return repos;
	};

	return (
		<div className={classes.content}>
			<Card>
				<Search onUserSearch={userSearchHandler} />
			</Card>
			{!userVisible && (
				<Card>
					<div id="container" className={classes['container']}>
						<p>
							Search for a user to list owned repositories. Don't have any
							ideas?
						</p>
						<button
							className={classes['slide-button']}
							onClick={() => userSearchHandler('pfmnowak')}
						>
							<span
								className={classes['slide-button__circle']}
								aria-hidden="true"
							>
								<span className={classes['slide-button__arrow']}></span>
							</span>
							<span className={classes['slide-button__text']}>
								Load my account
							</span>
						</button>
					</div>
				</Card>
			)}
			{userVisible && renderUser()}
			{reposVisible && renderRepos()}
			<Card>
				<Footer />
			</Card>
		</div>
	);
};

export default Content;
