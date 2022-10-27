import React from 'react';
import Button from './Button';
import classes from './UserDashboard.module.scss';

const UserDashboard = props => {
	return (
		<div className={classes.dashboard}>
			<div className={classes.dashboard__header}>
				<div className={classes['dashboard__photo-box']}>
					<img
						className={classes.dashboard__photo}
						src={props.user.avatarUrl}
						alt="User's profile pic"
					/>
				</div>
				<div className={classes.dashboard__info}>
					<div className={classes.dashboard__name}>
						{props.user.name ? props.user.name : '-'}
					</div>
					<a
						className={`${classes.dashboard__profileUrl} ${classes.dashboard__link}`}
						href={props.user.profileUrl}
						target="_blank"
						rel="noreferrer"
					>
						@{props.user.login}
					</a>
				</div>
				<div className={classes.dashboard__stats}>
					<div className={classes.statistic}>
						<div className={classes.statistic__label}>Repos:</div>
						<div className={classes.statistic__value}>
							{props.user.publicRepos}
						</div>
					</div>
					<div className={classes.statistic}>
						<div className={classes.statistic__label}>Followers:</div>
						<div className={classes.statistic__value}>
							{props.user.followers}
						</div>
					</div>
					<div className={classes.statistic}>
						<div className={classes.statistic__label}>Following:</div>
						<div className={classes.statistic__value}>
							{props.user.following}
						</div>
					</div>
				</div>
			</div>
			<div className={classes.dashboard__content}>
				<div className={classes.dashboard__bio}>
					{props.user.bio ? props.user.bio : 'User has no bio'}
				</div>
				<div className={classes.dashboard__details}>
					<div className={classes.dashboard__location}>
						Location: {props.user.location ? props.user.location : '-'}
					</div>
					<div className={classes.dashboard__blogUrl}>
						Page:{' '}
						{props.user.blogUrl ? (
							<a
								className={classes.dashboard__link}
								href={props.user.blogUrl}
								target="_blank"
								rel="noreferrer"
							>
								{props.user.blogUrl}
							</a>
						) : (
							'-'
						)}
					</div>
					<div className={classes.dashboard__email}>
						email: {props.user.email ? props.user.email : '-'}
					</div>
					<div className={classes.dashboard__company}>
						Company: {props.user.company ? props.user.company : '-'}
					</div>
				</div>
				{props.user.publicRepos > 0 && (
					<div className={classes.dashboard__button}>
						<Button
							type="button"
							onClick={() => props.onClickFetchRepos(props.user.login)}
						>
							{props.reposVisible ? 'Hide repos' : 'Show Repos'}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserDashboard;
