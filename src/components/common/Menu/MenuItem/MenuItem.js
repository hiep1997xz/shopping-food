import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem/ButtonAddRemoveItem'
import './MenuItem.css'

const MenuItem = ({ item }) => {
  const { id, img, name, price, info } = item
  const handleQuantity = () => {
    let quantity = 0;
    // if()
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
        <ButtonAddRemoveItem quantity={handleQuantity()} />
      </div>
    </div>
  )
}

export default MenuItem
