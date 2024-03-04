import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navigation/Nav'
import s from './Navigation/Nav.module.css'

const Layout = () => {
  return (
    <div>
        <header className={s.wrapper}>
       <Nav/>
          </header>
          <Outlet/>
    </div>
  )
}

export default Layout
