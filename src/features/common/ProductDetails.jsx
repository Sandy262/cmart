import React from "react";
import { useGetProductDetailsByIdQuery } from "../../services/product.service";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function ProductDetails() {
var dispatch=useDispatch()
  var params = useParams();
  var { isLoading, data: product } = useGetProductDetailsByIdQuery(params.id);
  console.log(product);
  return (
    <div className="d-flex">
        {
            !isLoading&&(
                <>
                <div className='w-50'>  
                <h1>{!isLoading&&product.name}</h1>
                <img src={product.imgUrl} className="w-50" alt="" />
                <button className="btn btn-success" onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</button>
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
