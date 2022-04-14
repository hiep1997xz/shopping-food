import React from 'react'
import { connect } from 'react-redux'
import { cartAddItem, cartRemoveItem } from '../../../../redux/Cart/cart.action'
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/Cart/cart.selector'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem/ButtonAddRemoveItem'
import './MenuItem.css'

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, price, info } = item
  
  const handleQuantity = () => {
    let quantity = 0
    if (cartCount !== 0) {

      // const foundItemInCart = cartList.find((item) => item.id === id)
      // console.log(foundItemInCart);
      // // if (foundItemInCart) {
      // //   quantity = foundItemInCart.quantity
      // // }
    }
    return quantity
  }

  return (
    <div className="item">
      <img src={img} />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleAddItem={() => cartAddItem(item)}
          handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartAddItem: (item) => dispatch(cartAddItem(item)),
    cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
