import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CreateForm = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:3001/users/', {
      id: user,
      email: email,
      password: pass,
      pfp: "",
      balance: "0",
      exits: "",
    }).then(function(res){
      window.location.replace("/");
    }).catch(function(err){
      console.log(err)
    })
  }


  return (
    <motion.div 
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 0 }}

    className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='w-[320px] h-[500px] bg-white rounded-md flex flex-col items-center gap-6 drop-shadow-xl'>
            <h1 className='text-lg mt-8 font-semibold'>Crie sua carteira digital</h1>

            <input value={user} onChange={(e) => setUser(e.target.value)} type="text" required placeholder='Username' className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none'/>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder='Email' className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none'/>

            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" required placeholder='Senha' className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none'/>
            
            <button onClick={handleLogin} className='px-12 py-4 border-2 border-bgColor rounded-md text-bgColor mt-4'>CONTINUAR</button>

            <div className='flex flex-col mt-4 text-bgColor gap-2 text-sm font-semibold'>
                <Link to="/">Já sou cliente </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default CreateForm