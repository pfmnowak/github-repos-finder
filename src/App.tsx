import classes from './App.module.scss';
import Content from './components/Content';
import Header from './components/Header';
import ScrollTopButton from './components/UI/ScrollTopButton';

function App() {
	return (
		<div className={classes.App}>
			<Header />
			<Content />
			<ScrollTopButton />
		</div>
	);
}

export default App;
