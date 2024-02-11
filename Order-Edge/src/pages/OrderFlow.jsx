import React from 'react'
import { useParams } from 'react-router-dom'

function OrderFlow() {
  const {orderId} = useParams();
  return (
    <div>OrderFlow : {orderId}</div>
  )
}

export default OrderFlow