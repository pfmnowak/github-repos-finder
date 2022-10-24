import React from 'react';
import Button from './Button';
import classes from './UserDashboard.module.scss';

const UserDashboard = props => {
	return (
		<div className={classes.user}>
			<div className={classes.dashboard__header}>
				<div className={classes['user__photo-box']}>
					<img
						className={classes.user__photo}
						src={props.user.avatarUrl}
						alt="User's profile pic"
					/>
				</div>
				<div className={classes.dashboard__info}>
					<div className={classes.user__name}>
						{props.user.name ? props.user.name : '-'}
					</div>
					<a
						className={`${classes.user__profileUrl} ${classes.dashboard__link}`}
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
				<div className={classes.user__bio}>
					{props.user.bio ? props.user.bio : 'User has no bio'}
				</div>
				<div className={classes.dashboard__details}>
					<div className={classes.user__location}>
						Location: {props.user.location ? props.user.location : '-'}
					</div>
					<div className={classes.user__blogUrl}>
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
					<div className={classes.user__email}>
						email: {props.user.email ? props.user.email : '-'}
					</div>
					<div className={classes.user__company}>
						Company: {props.user.company ? props.user.company : '-'}
					</div>
				</div>
				{props.user.publicRepos > 0 && (
					<Button
						type="button"
						onClick={() => props.onClickFetchRepos(props.user.login)}
					>
						{props.reposVisible ? 'Hide repos' : 'Show Repos'}
					</Button>
				)}
			</div>
		</div>
	);
};

export default UserDashboard;
