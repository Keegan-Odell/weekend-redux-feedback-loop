import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comment from '../Feedback/Feedback.jsx';
import Review from '../Review/Review.jsx';
import Submit from '../Submit/Submit.jsx';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Feedback!</h1>
				<h4>Don't forget it!</h4>
			</header>
			<Router>
				<Route exact path='/'>
					<Feeling />
				</Route>

				<Route exact path='/understanding'>
					<Understanding />
				</Route>

				<Route exact path='/support'>
					<Support />
				</Route>

				<Route exact path='/comment'>
					<Comment />
				</Route>

				<Route exact path='/review'>
					<Review />
				</Route>

				<Route exact path='/submit'>
					<Submit />
				</Route>
			</Router>
		</div>
	);
}

export default App;
