import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Submit() {
	const history = useHistory();

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
