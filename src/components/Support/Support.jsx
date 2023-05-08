import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Support() {
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
			feedback.support = input;
			dispatch({
				type: 'UPDATE_FEEDBACK',
				payload: feedback,
			});
			history.push('/comment');
		}
	};
	return (
		<div>
			<h2>How well are you being supported?</h2>
				<form>
					<input
						type='number'
						name='supportNum'
						id='supportNum'
						onChange={handleChange}
						value={input}
					/>
					<button onClick={onClick}>Next</button>
				</form>
		</div>
	);
}

export default Support;
