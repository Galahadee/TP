import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes path="/list"/>
      <Route path="/list" element= />
      <Routes/>
    </div>
  )
}

export default App
