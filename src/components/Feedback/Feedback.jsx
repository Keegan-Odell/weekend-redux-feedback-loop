import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Comment() {
	const dispatch = useDispatch();
	const history = useHistory();

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
		history.push('/review');
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
				<button onClick={onClick}>Next</button>
			</form>
		</div>
	);
}

export default Comment;
