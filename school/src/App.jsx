import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import School from './School'
import Studennt from './Studennt'
import Admin from './Admin'
import Mentor from './Mentor'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
  <School/>
  {/* <Studennt/>
  <Admin/>
  <Mentor/> */}
  </div>
  )
}

export default App
