import classes from './Header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.header__title}>GitHub Repos Finder</h1>
		</header>
	);
};

export default Header;
