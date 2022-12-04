import classes from './ReposContainer.module.scss';

type ReposMessageProps = {
	isError?: boolean;
	message: string;
};

const ReposMessage = (props: ReposMessageProps) => {
	return (
		<p
			className={`${classes['repos-container__message']} ${
				props.isError && classes['repos-container__message--error']
			}`}
		>
			{props.message}
		</p>
	);
};

export default ReposMessage;
