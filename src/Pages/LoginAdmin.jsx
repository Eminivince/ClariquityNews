import React from 'react'
import Navbar from "../Components/Navbar"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'





const LoginAdmin = () => {

  const [email, setEmail] = useState("eeeee")
  const [password, setPassword] = useState("pppp")

  function updateEmail(e){
      //setEmail(e.target.vale)
      console.log(`email is ${email}`)
      setEmail(e.target.value)
      
  }
  function updatePassword(e){
      //setPassword(e.target.vale)
      console.log(`password is ${password}`)
      setPassword(e.target.value)
      
  }
  return (
    <div>
      <Navbar />
        <section className='login flex flex-col pt-5 items-center bg-gray-600 h-[50vh] w-[50vw] mx-auto mt-32'>
            <h1 className='mb-10 text-3xl font-bold text-white'>Admin Login</h1>
            <div className='login-modal'>
                <form action="" className='flex flex-col items-center text-lg space-y-10'>
                    <input type="text" placeholder='Admin Email'
                    onChange={(e)=>(updateEmail(e))} value={email} className='border-b pb-3 text-white bg-transparent p-3'/>

                    <input type="text" placeholder='Admin Password' className='border-b pb-3 bg-transparent text-white p-3' onChange={(e)=>(updatePassword(e))} value={password} />

                    
                    <button type='button' className='bg-yellow-500 w-[250px] p-3 text-xl font-semibold hover:cursor-pointer hover:brightness-105'><Link to="/adminboard">Login</Link></button>
                    
                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default LoginAdmin