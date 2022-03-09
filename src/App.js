import React from 'react'
import Main from './Components/Main/Main'
import { CookiesProvider } from 'react-cookie'

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

const App = () => {
  return (
    <CookiesProvider>
    
      <Main />
    </CookiesProvider>
  )
}

export default App
