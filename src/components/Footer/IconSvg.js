import React from 'react';
import Icons from './icons/sprite.svg';

const IconSvg = props => (
	<svg className={props.className}>
		<use xlinkHref={`${Icons}#${props.name}`} />
	</svg>
);

export default IconSvg;
