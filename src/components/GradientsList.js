import {useContext} from 'react'
import {FilterContext} from '../context/FilterContext'
import Gradient from "./Gradient"
import { gradients } from "../gradients"

const GradientsList = () => {
  const { filter } = useContext(FilterContext)
  
  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <>
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags, id = [] } = el
        return (
          <Gradient
            key={name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
            key={id}
            id={id}
         
          />
        )
      })}
    </ul>
    </>
  )
}

export default GradientsList
