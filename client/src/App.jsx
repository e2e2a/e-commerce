import { useState } from 'react'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Footer from './Shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
