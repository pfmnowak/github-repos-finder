import { ReactNode } from 'react';
import classes from './Button.module.scss';

type ButtonProps = {
	onClick?: () => void;
	type: 'button' | 'submit' | 'reset' | undefined;
	children?: ReactNode;
};

const Button = (props: ButtonProps) => {
	return (
		<button
			className={classes.button}
			onClick={props.onClick}
			type={props.type}
		>
			{props.children}
		</button>
	);
};

export default Button;
