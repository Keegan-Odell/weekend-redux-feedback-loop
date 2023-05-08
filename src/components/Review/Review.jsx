import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './review.css';

function Review() {
	//these are the hooks we will use
	const history = useHistory();
	const dispatch = useDispatch();

	//this is the redux variable from the store
	const feedback = useSelector((store) => store.feedback);

	//on submit we will send our feedback object to the server
	//if it is successful we will then set the object back to null
	//for the next feedback loop
	//then we will route to the submit page
	const onSubmit = () => {
		axios
			.post('/feedback', {
				feeling: feedback.feeling,
				understanding: feedback.understanding,
				support: feedback.support,
				comment: feedback.comments,
			})
			.then((response) => {
				feedback.feeling = null;
				feedback.understanding = null;
				feedback.support = null;
				feedback.comments = null;
				dispatch({
					type: 'UPDATE_FEEDBACK',
					payload: feedback,
				});
				history.push('/submit');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h2>Review Your Feedback</h2>
			<ul>
				<li>Feelings: {feedback.feeling}</li>
				<li>Understanding: {feedback.understanding}</li>
				<li>Support: {feedback.support}</li>
				<li>Comments: {feedback.comments}</li>
			</ul>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
}

export default Review;
