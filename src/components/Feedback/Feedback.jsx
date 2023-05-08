import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Comment() {
	const dispatch = useDispatch();

	const [input, setInput] = useState('');

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	let feedback = useSelector((store) => store.feedback);

	const onClick = () => {
		feedback.comments = input;
		dispatch({
			type: 'UPDATE_FEEDBACK',
			payload: feedback,
		});
	};
	return (
		<div>
			<h2>Any comments you want to leave?</h2>
			<form>
				<input
					type='text'
					name='comment'
					id='comment'
					onChange={handleChange}
					value={input}
				/>
				<button onClick={onClick}>
					<Link to='/review'>Next</Link>
				</button>
			</form>
		</div>
	);
}

export default Comment;
