import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Afreen Ahmed"
  let a = 45;
  let b = 50;
  let date = new Date().toLocaleDateString()
  return(
    <div>
  <h1>Hello I am Afreen Ahmed!!!</h1>
  <h2>Tiptur</h2>
  <h3>Add = {a+b}</h3>
  <h1>date:{date}</h1>
</div>
  )

}

export default App
