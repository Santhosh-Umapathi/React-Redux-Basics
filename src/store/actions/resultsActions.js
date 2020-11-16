import * as actionTypes from './actionTypes'



//Sync Action to pass to middleware
export const saveResult = (value) =>
{
	return {
		type: actionTypes.STORE,
		payload: value
	}
}


//Async Actions with middleware for resultsReducer
export const storeResult = (value) =>
{
	//MiddleWare
	return (dispatch, getState) =>
	{	//Async Operation performed and dispatches redux action after
		setTimeout(() =>
		{	//Get old state before dispatching an action
			const oldState = getState().ctr.counter
			console.log(oldState)
			dispatch(saveResult(value))
		}, 2000);
	}
}

export const deleteResult = (value) =>
{
	return {
		type: actionTypes.DELETE,
		payload:value
	}
}

