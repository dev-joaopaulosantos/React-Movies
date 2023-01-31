import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [blackNavbar, setBlackNavbar] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 20){
        setBlackNavbar(true)
      }else{
        setBlackNavbar(false)
      }

    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="App">
      <Navbar blackNavbar={blackNavbar} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
