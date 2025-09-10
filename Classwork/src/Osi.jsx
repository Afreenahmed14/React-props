import React from 'react'
import Tcp from './Tcp'
import Dns from './Dns'
const Osi = () => {
  return (
    <div>
      <h3>This is the osi model</h3>
      <Tcp/>
      <Dns/>
    </div>
  )
}

export default Osi
