import React from 'react'
import { Link } from 'react-router-dom'
import { usePlaceOrderMutation } from '../../services/order.service'
import { useSelector } from 'react-redux'

function PlaceOrder() {
  var [placeOrderFn]=usePlaceOrderMutation()
  var {cartItems}=useSelector(state=>state.cart)
  function newPlaceOrder(){
    cartItems.username=window.localStorage.getItem('username')
    placeOrderFn()
  }
  return (
    <div>
      <h2>Are you sure to Place Order</h2>
      <Link className="btn btn-warning" to="">Cancel</Link>
      <button className='btn btn-success' onClick={()=>{}}>YeS, Place Order</button>
    </div>
  )
}

export default PlaceOrder
