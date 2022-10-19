import React from 'react';
import Repo from './Repo';
import classes from './ReposContainer.module.scss';

const ReposContainer = () => {
	return (
		<div className={classes['repos-container']}>
			<p className={classes['repos-container__message']}>
				Search for a user to list owned repositories
			</p>
			<Repo name="test" language="js" stargazers_count={7} />
		</div>
	);
};

export default ReposContainer;
