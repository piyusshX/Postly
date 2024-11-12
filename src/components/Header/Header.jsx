import React from 'react'
import { Container, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from './Logo'
import './header.css'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='w-full top-0 left-0 right-0 bg-[#1F2833] fixed z-50 '>
        <nav className='flex justify-between items-center py-7 px-20'>
          <div className=''>
            <Link to='/'>
              <Logo  />
            </Link>
          </div>
          <ul className='flex'>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='nav-items bg-transparent mr-24 text-[#ffffff] hover:text-[#C5C6C7] transition-colors duration-200 group'
                >{item.name}
                  <div className="w-full h-[1.5px] bg-[#1F2833] cursor-pointer group-hover:bg-[#C5C6C7] transition-colors duration-200"></div>
                </button>
              </li>
            ) : null
            )}
            {/* In below code is a react syntax
              {condition && (item/code)}
              if condition is true then the item/code will be displayed
            */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        <div className='w-[93%] h-[1.5px] bg-[#C5C6C7] mx-auto'></div>
    </header>
  )
}

export default Header