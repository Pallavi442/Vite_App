import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageComp from './component/MessageComp'
import FetchApiData from './component/FetchApiData'



function App() {
  return (
    <>
    <MessageComp/>
    <FetchApiData/>
    </>
  )
}

export default App
