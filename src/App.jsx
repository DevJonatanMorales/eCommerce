import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShowCategorias } from './components/ShowCategorias'
import { ShowProducts } from './components/ShowProducts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowCategorias></ShowCategorias>} ></Route>
        <Route path='/catagoria/:categoria' element={ <ShowProducts></ShowProducts>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
