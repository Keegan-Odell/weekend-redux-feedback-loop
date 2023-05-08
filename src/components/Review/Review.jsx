import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {
	const feedback = useSelector((store) => store.feedback);
	console.log(feedback);

	const onSubmit = () => {
		axios
			.post('/feedback', {
				feeling: feedback.feeling,
				understanding: feedback.understanding,
				support: feedback.support,
				comment: feedback.comments,
			})
			.then((response) => {
				console.log('done');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h2>Review Your Feedback</h2>
			<Router>
				<ul>
					<li>Feelings: {feedback.feeling}</li>
					<li>Understanding: {feedback.understanding}</li>
					<li>Support: {feedback.support}</li>
					<li>Comments: {feedback.comments}</li>
				</ul>
				<button>
					<Link to='/'>Submit</Link>
				</button>
			</Router>
		</div>
	);
}

export default Review;
