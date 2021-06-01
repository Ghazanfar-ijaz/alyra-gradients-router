export const gradientsReducer = (state, action) => {
  // FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      case "FETCH_PAGE":
        return {
          ...state,
          page: state.page + 1,
        }

    default:
      throw new Error(`Unsupported action type ${action.type} in gradientsReducer`)
  }
}

/*
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

function gradientsReducer() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`https://gradients-api.herokuapp.com/gradients`)
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])
	return (
		<div>
			{state.loading ? 'Loading' : state.post.title}
			{state.error ? state.error : null}
		</div>
	)
}
*/
export default gradientsReducer