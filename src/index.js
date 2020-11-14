import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'

//Reducer
import counterReducer from './store/reducers/counterReducer'
import resultsReducer from './store/reducers/resultsReducer'

//Root Reducer
const rootReducer = combineReducers({
	ctr: counterReducer, 
	res:resultsReducer
})




//Store
const store = createStore(rootReducer)

ReactDOM.render(<Provider store = {store}>
	<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
