import React, { useRef } from 'react'
import ButtonCartCount from '../../components/common/ButtonCartCount/ButtonCartCount'
import Footer from '../../components/common/Footer/Footer'
import Banner from '../../components/Home/Banner'

const Home = () => {
  const menuRef = useRef()

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu}/>
      <Footer />
      <ButtonCartCount />
    </div>
  )
}

export default Home
