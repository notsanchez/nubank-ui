import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'


const LoginForm = () => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    axios.get('http://localhost:3001/users/' + user ).then(function(res){
      if(pass == res.data.password){
        localStorage.setItem("user", JSON.stringify(res.data.id))
        window.location.replace("/");
      } else{
        console.log('credenciais erradas')
      }
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
            <h1 className='text-lg mt-8 font-semibold'>Faça seu login</h1>

            <input 
              type="text" 
              required 
              placeholder='Username' 
              className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              />

            <input 
              type="password" 
              required 
              placeholder='Senha' 
              className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              />
            
            <button onClick={handleLogin} className='px-12 py-4 border-2 border-bgColor rounded-md text-bgColor mt-4'>CONTINUAR</button>

            <div className='flex flex-col mt-4 text-bgColor gap-2 text-sm font-semibold'>
                <Link to="/create">Esqueci minha senha </Link>
                <Link to="/create">Ainda não sou cliente </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default LoginForm