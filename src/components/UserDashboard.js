import React from 'react';
import classes from './UserDashboard.module.scss';

const UserDashboard = props => {
	return (
		<div className={classes.user}>
			<div className={classes['user__photo-box']}>
				<img
					className={classes.user__photo}
					src={props.user.avatarUrl}
					alt="User's profile pic"
				/>
			</div>
			<div className={classes.user__name}>
				{props.user.name ? props.user.name : '-'}
			</div>
			<div className={classes.user__login}>
				<a
					className={classes.user__profileUrl}
					href={props.user.profileUrl}
					target="_blank"
					rel="noreferrer"
				>
					@{props.user.login}
				</a>
			</div>
			<div className={classes.user__bio}>
				{props.user.bio ? props.user.bio : 'User has no bio'}
			</div>
			<div className={classes.user__location}>
				Location: {props.user.location ? props.user.location : '-'}
			</div>
			<div className={classes.user__blogUrl}>
				Page:{' '}
				{props.user.blogUrl ? (
					<a
						className={classes['user__blogUrl-link']}
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

			<div className={classes.user__publicRepos}>
				Repos: {props.user.publicRepos}
			</div>
			<div className={classes.user__followers}>
				Followers: {props.user.followers}
			</div>
			<div className={classes.user__following}>
				Following: {props.user.following}
			</div>
			<div className={classes.user__email}>
				email: {props.user.email ? props.user.email : '-'}
			</div>
			<div className={classes.user__company}>
				Company: {props.user.company ? props.user.company : '-'}
			</div>
			<div className={classes.user__twitterUsername}>
				@{props.user.twitterUsername ? props.user.twitterUsername : '-'}
			</div>
			{props.user.publicRepos > 0 && (
				<button onClick={() => props.onClickFetchRepos(props.user.login)}>
					Load Repos
				</button>
			)}
		</div>
	);
};

export default UserDashboard;
