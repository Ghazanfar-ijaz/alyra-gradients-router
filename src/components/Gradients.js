//import { useState, useReducer, useEffect } from "react"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
//import { gradientsReducer } from "../reducers/gradientsReducer"


const Gradients = () => {

  /*
  const initialState = {
    gradients: [],
    loading: false,
    error: "",
  }

  const [state, dispatch] = useReducer(gradientsReducer, initialState)
  //const { data, loading, error } = state
  //const { gradientsDispatch } = useState()

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(`${process.env.REACT_APP_API_URL}/gradients`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong ${response.statusText}`)
        }
        return response.json()
      })
      .then((result) => {
        console.log(result)
        //if (isMounted.current) {
        dispatch({ type: "FETCH_SUCCESS", payload: result })
        //}
      })
      .catch((error) => {
        //if (isMounted.current) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
        //}
      })
  }, [])
  */


  return (
    <>
      <GradientsSelect />
      <GradientsList />
    </>
  )
}

export default Gradients
