import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import './Card.css'

function App() {
  return (
    <div>
      <div><center><h1>Products</h1></center></div>
    <div className='f'>
      
      
   <Card name="laptop" price="$700" availability="In stock"   imgeurl={"https://www.apple.com/v/macbook-air/u/images/overview/hero/hero_static__c9sislzzicq6_large.png"}/>
   <Card name="Phone" price="$300" availability="In stock" imgeurl={"https://images-cdn.ubuy.co.in/6704ab5781b8a31fe11e78a4-mini-phone-3g-unlocked-small-smartphone.jpg"}/>
   <Card name="Speaker" price="$100" availability= "Out of stock" imgeurl={"https://i.pinimg.com/736x/6d/73/a2/6d73a236b1e10e524872be0ba1c8d013.jpg"} />
   <Card name="oven" price="$70" availability= "In stock" imgeurl={"https://i.pinimg.com/474x/7a/3d/04/7a3d0405a1f3eee9250b17aef2f38112.jpg"} />
   </div>
   </div>
  )
}
export default App