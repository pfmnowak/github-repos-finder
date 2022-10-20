import React from 'react';
import Repo from './Repo';
import classes from './ReposContainer.module.scss';

const ReposContainer = props => {
	return (
		<div className={classes['repos-container']}>
			{props.repos &&
				props.repos.length > 0 &&
				props.repos.map(repo => <Repo key={repo.name} {...repo} />)}
		</div>
	);
};

export default ReposContainer;
