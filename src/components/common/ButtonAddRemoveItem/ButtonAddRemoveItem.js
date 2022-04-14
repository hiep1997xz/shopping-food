import React from 'react'
import './ButtonAddRemoveItem.css'

const ButtonAddRemoveItem = ({ quantity, handleRemoveItem, handleAddItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div>
          <i
            className="fa fa-minus"
            aria-hidden="true"
            onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i
            className="fa fa-plus"
            aria-hidden="true"
            onClick={handleAddItem}></i>
        </div>
      ) : (
        <div onClick={handleAddItem} className="btnAddRemove-negative">
          <span>ADD</span>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      )}
    </div>
  )
}

export default ButtonAddRemoveItem
