import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Computer from './Computer'
import Dsa from './Dsa'
import Java from './Java'
// import React from './React' 

function App() {
  return (
    <div>
      <h1>Welcome to home page</h1>

      {/* Navigation */}
      <nav>
        <NavLink to="/">Computer Network</NavLink> <br />
        <NavLink to="/Dsa">DSA page</NavLink> <br />
        <NavLink to="/Java">Java page</NavLink> <br />
        {/* <NavLink to="/React">React page</NavLink> */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Computer />} />
        <Route path="/Dsa" element={<Dsa />} />
        <Route path="/Java" element={<Java />} />
        {/* <Route path="/React" element={<ReactPage />} /> */}
      </Routes>
    </div>
  )
}

export default App
