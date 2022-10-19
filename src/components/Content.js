import React from 'react';
import classes from './Content.module.scss';
import ReposContainer from './ReposContainer';
import Search from './Search';

const Content = () => {
	return (
		<div className={classes.content}>
			<Search />
			<ReposContainer />
		</div>
	);
};

export default Content;
