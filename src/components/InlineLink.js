import classes from './InlineLink.module.scss';

const InlineLink = props => {
	return (
		<a
			href={props.link}
			className={classes['inline-link']}
			title={props.title}
			target="_blank"
			rel="noreferrer"
		>
			{props.children}
		</a>
	);
};

export default InlineLink;
