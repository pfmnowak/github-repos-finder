import classes from './App.module.scss';
import Content from './components/Content';
import Header from './components/Header';

function App() {
	return (
		<div className={classes.App}>
			<Header />
			<Content />
		</div>
	);
}

export default App;
