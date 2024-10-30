import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from './index'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice' 

function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const create = async(data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData));
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input 
                            label="Username : "
                            placeholder="Enter your username"
                            type="username"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        <Input 
                            label="Email : "
                            placeholder="Enter your email"
                            type="email"
                            // we have to spread register every time agar humne aaisa nhi kiya to jaha per bhi
                            // humne register use kiya hai waha ki value overwrite hojayegi
                            {...register("email", {
                                required: true,
                                validate: {
                                    // the given expression below is a regExp. In this case it is used for validating
                                    // the entered email -> https://regexr.com/ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })} 
                        />
                        <Input 
                            label="Password : "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            SignUp
                        </Button>
                    </div>
                </form>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline" >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup