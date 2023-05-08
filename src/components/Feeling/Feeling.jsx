import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Feeling() {
  //hooks that we will use 
	const dispatch = useDispatch();
	const history = useHistory();

  //input state for our redux variable
	const [input, setInput] = useState(0);

  //this handles change on the input
	const handleChange = (event) => {
		setInput(event.target.value);
	};

  //this is our redux variable
	let feedback = useSelector((store) => store.feedback);

  //on click if the input is not a number it will set the feedback object feeling to the input then disptach it to the store
  //then it will push us to the next route
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
		</div>
	);
}

export default Feeling;
