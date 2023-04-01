import { useRouter } from 'next/router'
import React from 'react'

export default function ContactID() {
    const {query:{contactId}}=useRouter()
  return (
    <div>ContactID - {contactId}</div>
  )
}
