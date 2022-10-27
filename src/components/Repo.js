import React from 'react';
import classes from './Repo.module.scss';

const Repo = props => {
	return (
		<div className={classes.repo}>
			<div className={classes.repo__name}>{props.name}</div>
			<div className={classes.repo__lang}>
				{props.language ? props.language : '-'}
			</div>
			<div className={classes.repo__stars}>{props.stars}⭐</div>
			<a className={classes.repo__link} href={props.link} target="_blank">
				link
			</a>
		</div>
	);
};

export default Repo;
