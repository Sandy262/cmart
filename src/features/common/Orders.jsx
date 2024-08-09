import React, { useEffect } from 'react'
import { useGetAllOrdersQuery, useLazyGetAllOrdersQuery } from '../../services/order.service'
import OrdersTable from './OrdersTable'

function Orders() {
    var {isLoading,data:orders}=useGetAllOrdersQuery()
    var [getAllOrdersFn]=useLazyGetAllOrdersQuery()
    console.log(orders)
    useEffect(()=>{
      getAllOrdersFn();
    },[])
  return (
    <div className='border borders-2 border-danger m-2 p-2'>
      Orders
      <OrdersTable orders={orders}></OrdersTable>
    </div>
  )
}

export default Orders
