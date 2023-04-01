import { useRouter } from 'next/router'
import React from 'react'

export default function CID() {
  const {query:{cId}}=useRouter()
  return (
    <div>CID -{cId}</div>
  )
}
