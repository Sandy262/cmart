import React from "react";
import { Link, Outlet } from "react-router-dom";
function ManagerDashboard() {
  return (
    <div>
      <h1>Manager Dashboard</h1>
      <Link to="addProduct" className="btn btn-primary">Add Products</Link>
      <Link to="viewOrders" >View Orders</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default ManagerDashboard;
