import classes from './BackgroundImage.module.scss';

type BackgroundImageProps = {
	link: string;
	alt: string;
};

const BackgroundImage = (props: BackgroundImageProps) => {
	return (
		<img
			className={classes['background-image']}
			src={props.link}
			alt={props.alt}
		/>
	);
};

export default BackgroundImage;
