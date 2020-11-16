import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'

//Redux-Thunk
import thunk from 'redux-thunk'

//Reducer
import counterReducer from './store/reducers/counterReducer'
import resultsReducer from './store/reducers/resultsReducer'

//Root Reducer
const rootReducer = combineReducers({
	ctr: counterReducer, 
	res:resultsReducer
})

//MiddleWare
const middleware = store =>
{
	return next =>
	{
		return action =>
		{
			console.log("[MiddleWare] dispatching:", action)
			const result = next(action)
			console.log("[MiddleWare] Next state:", store.getState())
			return result;
		}
	}
}
	
//Redux DevTools Config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Store 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middleware, thunk)))

ReactDOM.render(<Provider store = {store}>
	<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
