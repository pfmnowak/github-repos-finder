import Repo from './Repo';
import classes from './ReposContainer.module.scss';

type ReposContainerProps = {
	repos: [
		{
			link: string;
			name: string;
			language: string;
			stars: number;
			homepage: string;
		}
	];
};

const ReposContainer = (props: ReposContainerProps) => {
	return (
		<div className={classes['repos-container']}>
			{props.repos &&
				props.repos.length > 0 &&
				props.repos.map(repo => <Repo key={repo.name} {...repo} />)}
		</div>
	);
};

export default ReposContainer;
