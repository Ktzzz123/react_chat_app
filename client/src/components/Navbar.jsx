import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  useEffect(()=>{
    
  })
  return (
    <div>
        <Link to={'/'}> HOME</Link>

        <Link to={'/register'}> register</Link>
        {localStorage.getItem('chat-app-user')?<Link to={'/logout'}>Logout</Link>:<Link to={'/Login'}>Login</Link>}
    </div>
  )
}
