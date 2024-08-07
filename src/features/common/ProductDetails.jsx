import React from "react";
import { useGetProductDetailsByIdQuery } from "../../services/product.service";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

function ProductDetails() {
var dispatch=useDispatch()
  var params = useParams();
  var { cartItems }=useSelector(state=>state.cart)
  var { isLoading, data: product } = useGetProductDetailsByIdQuery(params.id);
  {
    //params.id is reading as string anduke + peduthunnaam kinda
  }
  console.log(product);
  function isInCart(){
    return cartItems.find((item)=>item.id===+params.id)
    {
      //returns object if it true, indicating cart items has match with current product details page. assalu find avvakapothe undefined return avuthundi
    }
  }
  return (
    <div className="d-flex">
        {
            !isLoading&&(
                <>
                <div className='w-50'>  
                <h1>{product.name}</h1>
                <img src={product.imgUrl} className="w-50" alt="" />
                {!isInCart()&&(<button className="btn btn-success" onClick={()=>{dispatch(addToCart({...product,count:1}))}}>Add To Cart</button>)}
                {isInCart()&&(<Link to="/cart" className="btn btn-warning">Go To Cart</Link>)}
                </div>
                <div className='w-50 text-center'>
                <h2>Price:{product.price}</h2>
                <h2>Price:{product.company}</h2>
                <h2>Price:{product.category}</h2>
                </div>
                </>
            )
        }
    </div>
  );
}

export default ProductDetails;
