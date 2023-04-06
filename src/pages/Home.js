import React from 'react'
import About from '../components/about/About'
import Hero from '../components/hero/Hero'
import LogBtns from '../components/logBtns/LogBtns'
import ToggleCartButton from '../components/toggleCartButton/ToggleCartButton'
const Home = () => {
  return (
    <>
      <LogBtns/>
      <Hero />
      <ToggleCartButton/>
      
    </>
  )
}

export default Home