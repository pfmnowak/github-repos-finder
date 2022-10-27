import classes from './Footer.module.scss';
import Social from './Social';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Social />
			<div className={classes.footer__info}>
				<p className={classes.footer__copyright}>
					Copyright &copy; 2022. Designed & built by{' '}
					<a
						href="https://pfmnowak.github.io/"
						className={classes.footer__link}
						title="Author's page"
					>
						Mikołaj Nowak
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
