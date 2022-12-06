import Button from './Button';
import InlineLink from './InlineLink';
import BackgroundImage from './UI/BackgroundImage';
import classes from './UserDashboard.module.scss';

type UserDashboardProps = {
	user: {
		avatarUrl: string;
		login: string;
		name: string;
		bio: string;
		location: string;
		blogUrl: string;
		profileUrl: string;
		publicRepos: number;
		followers: string;
		following: string;
		email: string;
		company: string;
		twitterUsername: string;
	};
	onClickFetchRepos: (username: string) => void;
	reposVisible: boolean;
};

const UserDashboard = (props: UserDashboardProps) => {
	return (
		<div className={classes.dashboard}>
			<BackgroundImage
				// Photo by <a href="https://unsplash.com/@rubaitulazad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rubaitul Azad</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
				link={require('../img/github-background-min.jpg')}
				alt="Background image with a GitHub Logo"
			/>
			<div className={classes.dashboard__container}>
				<div className={classes.dashboard__header}>
					<div className={classes['dashboard__photo-box']}>
						<img
							className={classes.dashboard__photo}
							src={props.user.avatarUrl}
							alt="User's profile pic"
							title="User's profile pic"
						/>
					</div>
					<div className={classes.dashboard__info}>
						<div className={classes.dashboard__name}>
							{props.user.name ? props.user.name : '-'}
						</div>
						<InlineLink
							link={props.user.profileUrl}
							title="User's profile on GitHub"
						>
							@{props.user.login}
						</InlineLink>
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
								<InlineLink link={props.user.blogUrl} title="User's web page">
									{props.user.blogUrl}
								</InlineLink>
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
		</div>
	);
};

export default UserDashboard;
