import InlineLink from './InlineLink';
import classes from './Repo.module.scss';
import IconSvg from './UI/IconSvg';

type RepoProps = {
	link: string;
	name: string;
	language: string;
	stars: number;
};

const Repo = (props: RepoProps) => {
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
			<div className={classes.repo__stars}>
				{props.stars}
				<IconSvg className={classes['repo__star-icon']} name="icon-star" />
			</div>
		</div>
	);
};

export default Repo;
