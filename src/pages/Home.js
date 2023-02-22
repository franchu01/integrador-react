import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import ToggleCartButton from '../components/toggleCartButton/ToggleCartButton'
const Home = () => {
  return (
    <>
      <Hero />
      <ToggleCartButton/>
      <About />
    </>
  )
}

export default Home