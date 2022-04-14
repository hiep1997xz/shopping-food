import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { selectCartItemsCount } from '../../../redux/Cart/cart.selector'
import './ButtonCartCount.css'

const ButtonCartCount = ({ cartCount }) => {
  const history = useHistory()
  return (
    <div className="btnCartCount" onClick={() => history.push('/cart')}>
      <div className="count">{cartCount >= 100 ? '99+' : 0}</div>
      <i class="fas fa-shopping-cart"></i>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartCount: selectCartItemsCount,
  }
}

export default connect(mapStateToProps)(ButtonCartCount)
