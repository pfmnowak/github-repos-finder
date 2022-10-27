import React from 'react';
import classes from './ReposContainer.module.scss';

const ReposMessage = props => {
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
