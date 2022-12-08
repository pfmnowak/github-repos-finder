import IconSvg from '../UI/IconSvg';
import classes from './Social.module.scss';

const Social = () => {
	return (
		<div className={classes.social}>
			<a
				href="https://github.com/pfmnowak/github-repos-finder"
				className={classes.social__link}
				title="GitHub Repo with the code"
			>
				<IconSvg name="icon-github" className={classes.social__icon} />
			</a>
		</div>
	);
};

export default Social;
