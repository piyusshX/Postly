import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice' 
// "as" is used for declaring a varible locally with different varName
import { Button, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("") // good pratice to emptyout all the errors
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='flex items-center justify-center w-full my-10'>
            <div className={`mx-auto w-full max-w-lg bg-[#F1F1F2] rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                {/* handleSubmit() is a type of event and it gives data to the function that we pass in it.
                    And where it gets data from? Ofcourse its from register event. */}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input 
                            label="Email : "
                            placeholder="Enter your email"
                            type="email"
                            className=""
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
                            Sign in
                        </Button>
                    </div>
                </form>
                <p className="mt-2 text-center text-base text-black/60">
                    {/* &apos; and &nbsp; are HTML Character Entities */}
                    Don&apos;t have any account?&nbsp; 
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login