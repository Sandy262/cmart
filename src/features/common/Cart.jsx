import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    var cartProducts=useSelector(state=>state)
    console.log(cartProducts)
  return <div>
    <h1>Cart</h1>
  </div>;
}

export default Cart;
