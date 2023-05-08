import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers
let emptyFeedback = {
	feeling: null,
	understanding: null,
	support: null,
	comments: null,
};

const feedback = (state = emptyFeedback, action) => {
	if (action.type === 'UPDATE_FEEDBACK') {
		const feedback = action.payload;
		return feedback;
	}
	return state;
};

const store = createStore(
	combineReducers({
		feedback,
	}),
	applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
