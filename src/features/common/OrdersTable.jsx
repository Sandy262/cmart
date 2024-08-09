import React from "react";
import { Link } from "react-router-dom";
import { useDeleteOrderMutation, useLazyGetAllOrdersQuery } from "../../services/order.service";

function OrdersTable({ orders }) {
var [deleteOrderFn]=useDeleteOrderMutation()
var [getAllOrdersFn]=useLazyGetAllOrdersQuery()
function deleteOrder(order){
    deleteOrderFn(order).then(()=>{getAllOrdersFn()})  
}
  return (
    <div className="border borders-2 border-success m-2 p-2">
      Orders Information
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>User Name</th>
            <th>No. Of Items</th>
            <th>View More</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            return (
              <tr>
                <td>{order.id}</td>
                <td>{order.username}</td>
                <td>{order.cartItems?.length}</td>
                <td>
                  <Link to="">View More...</Link>
                </td>
                <td><button className="btn btn-danger" onClick={()=>{deleteOrder(order)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
