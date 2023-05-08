import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Submit() {
	return (
		<div>
			<h2>Thank You!</h2>
			<button>
				<Link to='/'>Leave New Feedback</Link>
			</button>
		</div>
	);
}

export default Submit;
