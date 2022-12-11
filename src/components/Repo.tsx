import InlineLink from './InlineLink';
import classes from './Repo.module.scss';
import IconSvg from './UI/IconSvg';

type RepoProps = {
	link: string;
	name: string;
	language: string;
	stars: number;
	homepage: string;
};

const Repo = (props: RepoProps) => {
	return (
		<div className={classes.repo}>
			<div className={classes.repo__name}>
				<InlineLink link={props.link} title="Link to the GitHub repository">
					{props.name}
				</InlineLink>
			</div>
			<div className={classes.repo__homepage}>
				{props.homepage ? (
					<a
						href={props.homepage}
						className={classes['repo__homepage-link']}
						title="Homepage of the repository"
						target="_blank"
						rel="noreferrer"
					>
						<IconSvg
							className={classes['repo__globe-icon']}
							name="icon-globe"
						/>
					</a>
				) : (
					'-'
				)}
			</div>
			<div className={classes.repo__lang}>
				{props.language ? props.language : '-'}
			</div>
			<div className={classes.repo__stars}>
				{props.stars}
				<IconSvg className={classes['repo__star-icon']} name="icon-star" />
			</div>
		</div>
	);
};

export default Repo;
