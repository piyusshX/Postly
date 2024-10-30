import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button 
            className='inline-block px-6 py-2 border-none duration-200 mr-4 bg-[#F1F1F2] text-black hover:bg-[#CEE6F2] rounded-full'
            onClick={logoutHandler} >
            Logout
        </button>
    )
}

export default LogoutBtn