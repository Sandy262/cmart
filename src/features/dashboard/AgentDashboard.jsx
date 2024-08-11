import React from "react";
import OrdersTable from "../common/OrdersTable";
import { useGetAllOrdersQuery } from "../../services/order.service";
import { useSelector } from "react-redux";

function AgentDashboard() {
  var {username}=useSelector(state=>state.auth)
  var {isLoading,data:orders}=useGetAllOrdersQuery(username)
  return <div>
    <h1>Agent Dashboard</h1>
    <OrdersTable orders={orders}></OrdersTable>
  </div>;
}

export default AgentDashboard;  
