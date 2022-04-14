import React from 'react'
import EmptyCart from '../../components/Cart/EmptyCart'
import Footer from '../../components/common/Footer/Footer'
import Logo from '../../components/common/Logo/Logo'
import Menu from '../../components/common/Menu/Menu'
import './Cart.css'

const Cart = () => {
  return (
    <div className="cart-header">
      <Logo />
      <EmptyCart />
      <div className="orders">
        <h1 className="orders-heading">Your Orders</h1>
        <div className="orders-menu">
          <Menu //list={cartList}
          />
        </div>
        <h3 className="orders-total">Your Total $100</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
