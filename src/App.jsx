import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/nav"
import Home from "./components/home"
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App;