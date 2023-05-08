import React from 'react';
import Understanding from '../Understanding/Understanding';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Feeling() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [input, setInput] = useState(0);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	let feedback = useSelector((store) => store.feedback);

	const onClick = () => {
		if (input === '') {
			alert('please use a number');
		} else {
			feedback.feeling = input;
			dispatch({
				type: 'UPDATE_FEEDBACK',
				payload: feedback,
			});
			history.push('/understanding');
		}
	};

	return (
		<div>
			<h2>How are you feeling today?</h2>
			<Router>
				<form>
					<input
						type='number'
						name='feelingNum'
						id='feelingNum'
						onChange={handleChange}
						value={input}
					/>
					<button onClick={onClick}>Next</button>
				</form>
			</Router>
		</div>
	);
}

export default Feeling;
