import InlineLink from '../InlineLink';
import classes from './Footer.module.scss';
import Social from './Social';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Social />
			<div className={classes.footer__info}>
				<p className={classes.footer__copyright}>
					Copyright &copy; 2022. Designed & built by{' '}
					<InlineLink link="https://pfmnowak.github.io/" title="Author's page">
						Mikołaj Nowak
					</InlineLink>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
