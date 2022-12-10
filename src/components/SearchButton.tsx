import classes from './SearchButton.module.scss';
import IconSvg from './UI/IconSvg';

const SearchButton = () => {
	return (
		<button className={classes.search__button} type="submit">
			<IconSvg
				className={classes['search__button-icon']}
				name="icon-magnifying-glass"
			/>
		</button>
	);
};

export default SearchButton;
