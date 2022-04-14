import React, { useRef } from 'react'
import ButtonCartCount from '../../components/common/ButtonCartCount/ButtonCartCount'
import Footer from '../../components/common/Footer/Footer'
import { menuItemsData } from '../../components/common/Menu/data'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner'

const Home = () => {
  const menuRef = useRef()

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  )
}

export default Home
