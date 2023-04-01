import { useRouter } from 'next/router';
import React from 'react'

export default function OrderId() {
    const {query:{productId,orderId}}= useRouter();
      
  return (
    <div>product {productId} - orderId {orderId}</div>
  )
}
