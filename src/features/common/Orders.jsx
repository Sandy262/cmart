import React from 'react'
import { useGetAllOrdersQuery } from '../../services/order.service'

function Orders() {
    var {isLoading,data}=useGetAllOrdersQuery()
    console.log(data)
  return (
    <div>
      Orders
    </div>
  )
}

export default Orders
