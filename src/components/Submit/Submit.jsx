import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Submit() {
  //react hook
	const history = useHistory();

  //on click go back to the beginning of the loop
  //page mostly for looks
	const onClick = () => {
		history.push('/');
	};

	return (
		<div>
			<h2>Thank You!</h2>
			<button onClick={onClick}>Leave New Feedback</button>
		</div>
	);
}

export default Submit;
