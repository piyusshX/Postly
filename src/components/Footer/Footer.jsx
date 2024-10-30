import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 flex">
                        <div className="flex h-full justify-center items-center w-1/2">
                            <div className='grid place-items-center'>
                                    
                                    <p className="text-sm text-gray-600 text-center">
                                        &copy; Copyright 2022. All Rights Reserved by Piyush Jain.
                                    </p> 
                            </div>
                        </div>
                        <div className='flex gap-10 text-black font-bold'>
                            <p>Follow me On : </p>
                            <ul className='flex gap-x-10 text-black'>
                                <li className='text-black'>
                                    <a href={"https://github.com/piyusshX"} target='_blank'>
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href={"https://www.linkedin.com/in/piyush-jain-758735291"} target='_blank'>
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </section>
  )
}

export default Footer