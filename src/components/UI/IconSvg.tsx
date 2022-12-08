import Icons from '../../icons/sprite.svg';

type IconSvgProps = {
	className: string;
	name: string;
};

const IconSvg = (props: IconSvgProps) => (
	<svg className={props.className}>
		<use xlinkHref={`${Icons}#${props.name}`} />
	</svg>
);

export default IconSvg;
