import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/nav"
import Home from "./components/home"


function App() {

  return (
    <>
      <Nav></Nav>
      <Home></Home>
    </>
  )
}

export default App;