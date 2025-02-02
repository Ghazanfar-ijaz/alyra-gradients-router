import React from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { FilterContextProvider } from './context/FilterContext'
import gradientsReducer from './reducers/gradientsReducer'

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>

        <FilterContextProvider>
          <gradientsReducer />
        </FilterContextProvider>

      </main>
      <Footer />
    </div>
  )
}

export default App
