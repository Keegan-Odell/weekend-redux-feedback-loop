import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers

//this is our empty prototype of the feedback object we will use
let emptyFeedback = {
	feeling: null,
	understanding: null,
	support: null,
	comments: null,
};

//sets the state to the emptyFeedback
const feedback = (state = emptyFeedback, action) => {
    //this action will update the feedback then return it
	if (action.type === 'UPDATE_FEEDBACK') {
		const feedback = action.payload;
		return feedback;
	}
	return state;
};

//creates our store
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
