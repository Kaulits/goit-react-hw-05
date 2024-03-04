import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
          <h1>Ops, page is not found. Try again! Or not.</h1>
          <Link to='/'>Go Home</Link>
    </div>
  )
}

export default NotFound
