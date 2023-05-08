import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Support() {
  //react hooks we will use
	const dispatch = useDispatch();
  const history = useHistory();

  //state for our input
	const [input, setInput] = useState(0);

  //handles input change
	const handleChange = (event) => {
		setInput(event.target.value);
	};

  //this grabs our redux varibale from the store
	let feedback = useSelector((store) => store.feedback);

  //onclick if the input is a number it will set feedback.support to the input
  //then it will dispatch this
  //we will then push to the comment
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
