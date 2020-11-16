import * as actionTypes from './actionTypes'

//Actions for counterReducer
export const increment = () =>
{
	return {
		type:actionTypes.INCREMENT
	}
}

export const decrement = () =>
{
	return {
		type:actionTypes.DECREMENT
	}
}

export const add = (value) =>
{
	return {
		type: actionTypes.ADD,
		payload: value
	}
}

export const subract = (value) =>
{
	return {
		type: actionTypes.SUBRACT,
		payload: value
	}
}