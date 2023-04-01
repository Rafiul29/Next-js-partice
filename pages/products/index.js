import Link from 'next/link'
import React from 'react'

export default function Product({productId=33}) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href={`/products/${productId}`} replace>Product {productId}</Link>
    </div>
  )
}

