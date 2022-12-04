import { ReactNode } from 'react';
import classes from './InlineLink.module.scss';

type InlineLinkProps = {
	link: string;
	title: string;
	children?: ReactNode;
};

const InlineLink = (props: InlineLinkProps) => {
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
