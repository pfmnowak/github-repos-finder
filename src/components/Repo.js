import React from 'react';
import InlineLink from './InlineLink';
import classes from './Repo.module.scss';

const Repo = props => {
	return (
		<div className={classes.repo}>
			<div className={classes.repo__name}>
				<InlineLink link={props.link} title="Link to the GitHub repository">
					{props.name}
				</InlineLink>
			</div>
			<div className={classes.repo__lang}>
				{props.language ? props.language : '-'}
			</div>
			<div className={classes.repo__stars}>{props.stars}⭐</div>
		</div>
	);
};

export default Repo;
