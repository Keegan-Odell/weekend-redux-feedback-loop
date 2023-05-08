import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Comment() {
	//hooks that we will use
	const dispatch = useDispatch();
	const history = useHistory();

	//state that we will fill the redux object with
	const [input, setInput] = useState('');

	//this handles the change on our input to set the input
	const handleChange = (event) => {
		setInput(event.target.value);
	};

	//this is our redux store variable
	let feedback = useSelector((store) => store.feedback);

	//onClick we will set our feedback.comments object to the input then dispatch it to redux
	//after that we will move on to the review route

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
