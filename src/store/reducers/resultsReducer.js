import * as actionTypes from '../actions'


const initialState =
{
	results:[]
}


const reducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case actionTypes.STORE:
			return { ...state, results: state.results.concat({id:new Date(), value: action.payload})}
	
		case actionTypes.DELETE:
			const newArray = state.results.filter(item => item.id !== action.payload)
			return { ...state, results: newArray}
	
		default:
			return state;
	}
	
};

export default reducer;