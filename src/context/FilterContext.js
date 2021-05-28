import { createContext, useEffect, useReducer, useState } from 'react'
import {gradientsReducer} from "../reducers/gradientsReducer"

export const FilterContext = createContext()

export const FilterContextProvider = ({children}) => {
  const [filter, setFilter] = useState ('all')
  
  const initialState = {
    gradientList: [],
    loading: false,
    error: '',
    page: 1,
    hasNext: null,
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gradients`)
      .then((response) => {
        dispatch({ type: "FETCH_INIT" })
        if (!response.ok) {
          throw new Error(`Something went wrong ${response.statusText}`)
        }
        return response.json()
      })
      .then((result) => {
        console.log(result)
        dispatch({ type: "FETCH_SUCCESS", payload: result })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
      })
  }, [])

const [state, dispatch] = useReducer (gradientsReducer, initialState)  
const {loading, gradientList}= state

function allTags(list) {
  let listTotal = []
  for (let element of list) {
    if ('tags' in element)  {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

const tags = allTags(gradientList)

  return ( 
  <FilterContext.Provider value={{filter, setFilter, loading, gradientList, tags}}>
    {children}
  </FilterContext.Provider>
  )
}

/*
export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FilterContext outside of its provider`
    )
  }
  return context
} 
*/

