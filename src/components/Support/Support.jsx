import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
	const dispatch = useDispatch();

	const [input, setInput] = useState(0);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	let feedback = useSelector((store) => store.feedback);

	const onClick = () => {
		console.log(input);
		feedback.support = input;
		dispatch({
			type: 'UPDATE_FEEDBACK',
			payload: feedback,
		});
	};
	return (
		<div>
			<h2>How well are you being supported?</h2>
			<Router>
				<form>
					<input
						type='number'
						name='supportNum'
						id='supportNum'
						onChange={handleChange}
						value={input}
					/>
					<button onClick={onClick}>
						<Link to='/comment'>Next</Link>
					</button>
				</form>
			</Router>
		</div>
	);
}

export default Support;
