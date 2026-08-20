import React from 'react'
import { useParams } from 'react-router-dom'

function Random() {
    const {Userid}= useParams();
  return (
    <div>Random:{Userid}</div>  
  )
}

export default Random