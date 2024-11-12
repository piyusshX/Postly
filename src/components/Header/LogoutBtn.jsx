import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import './header.css'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button 
            className='nav-items bg-transparent text-[#ffffff] hover:text-[#C5C6C7] transition-colors duration-200 group'
            onClick={logoutHandler} >
            Logout
            <div className="w-full h-[1.5px] bg-[#1F2833] cursor-pointer group-hover:bg-[#C5C6C7] transition-colors duration-200"></div>
        </button>
    )
}

export default LogoutBtn