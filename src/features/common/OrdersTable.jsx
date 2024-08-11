import React from "react";
import { Link } from "react-router-dom";
import {
  useAcceptOrderMutation,
  useDeleteOrderMutation,
  useDispatchOrderMutation,
  useLazyGetAllOrdersQuery,
  useSetOrderDeliveredMutation,
} from "../../services/order.service";
import { useSelector } from "react-redux";
function OrdersTable({ orders }) {
  var {role}=useSelector(state=>state.auth)
  console.log(orders);
  var [deleteOrderFn] = useDeleteOrderMutation();
  var [getAllOrdersFn] = useLazyGetAllOrdersQuery();
  var [acceptOrderFn] = useAcceptOrderMutation();
  var [dispatchOrderFn] = useDispatchOrderMutation();
  var [deliveredFn]=useSetOrderDeliveredMutation();
  function acceptOrder(order) {
    var temp = JSON.parse(JSON.stringify(order));
    temp.status.push({
      action: "accepted",
      timestamp: Date.now(),
    });
    acceptOrderFn(temp).then(()=>{getAllOrdersFn()});
  }
  function dispatchOrder(order) {
    var temp = JSON.parse(JSON.stringify(order));
    temp.status.push({
      action: "dispatched",
      timestamp: Date.now(),
    });
    dispatchOrderFn(temp).then(()=>{getAllOrdersFn()});
  }
  function isAccepted(order) {
    var x = order?.status.find((s) => {
      if (s.action === "accepted") {
        return true;
      }
    });
    return x;
  }
  function isDelivered(order) {
    var x = order?.status.find((s) => {
      if (s.action === "delivered") {
        return true;
      }
    });
    return x;
  }
  function isDispatched(order) {
    var x = order?.status.find((s) => {
      if (s.action === "dispatched") {
        return true;
      }
    });
    return x;
  }

  function deleteOrder(order) {
    deleteOrderFn(order).then(() => {
      getAllOrdersFn();
    });
  }
  function delivered(order) {
    var temp = JSON.parse(JSON.stringify(order));
    temp.status.push({
      action: "delivered",
      timestamp: Date.now(),
    });
    deliveredFn(temp).then(()=>{getAllOrdersFn()});
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
                <td>
                  <b>{!isAccepted(order)&&"Waiting for Approval"}</b>
                  <b>{isAccepted(order)&&"Accepted"}</b>&nbsp;&nbsp;
                  <b>{isDispatched(order)?"Dispatched":""}</b>&nbsp;&nbsp;
                  <b>{isDelivered(order)?"Delivered":""}</b>&nbsp;&nbsp;
                  {role==='manager'&&<>
                  {!isAccepted(order) &&(
                    <>
                      <button
                        className="btn btn-danger mx-2 px-2"
                        onClick={() => {
                          deleteOrder(order);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-success mx-2 px-2"
                        onClick={() => {
                          acceptOrder(order);
                        }}
                      >
                        Accept
                      </button>
                    </>
                  )}
                  {
                    isAccepted(order)&&!isDispatched(order)&&<button className="btn btn-info mx-2 px-2" onClick={()=>{dispatchOrder(order)}}>Dispatch</button>
                  }
                  {
                    isDispatched(order)&&!isDelivered(order)&&<button className="btn btn-info mx-2 px-2" onClick={()=>{delivered(order)}}>Deliver</button>
                  }
                  </>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
