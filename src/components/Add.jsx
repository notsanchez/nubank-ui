import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Add = (props) => {

    const atualbalance = props.atualbalance
    const [addValue, setAddValue] = useState('');

    const finalvalue = Number(atualbalance) + Number(addValue)

    const handleLogin = () => {
        axios.patch('http://localhost:3001/users/' + props.user, {
          balance: finalvalue
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
        <div className='w-[320px] h-[500px] bg-white rounded-md flex flex-col items-center gap-6 drop-shadow-xl justify-evenly'>
            <Link to="/" className='flex'>
                <MdKeyboardArrowLeft className='text-2xl'/>
            </Link>
            <h1 className='text-lg font-semibold text-greenFigma'>Adicionar saldo</h1>

            <h1 className='text-lg mt-8 font-semibold'>Seu saldo atual: R$ {atualbalance}</h1>

            <input 
              type="text" 
              required 
              placeholder='Valor' 
              className='border-b-2 hover:border-bgColor py-4 text-sm focus:outline-none text-center'
              value={addValue}
              onChange={(e) => setAddValue(e.target.value)}
              />
            
            <button onClick={handleLogin} className='px-12 py-4 border-2 border-bgColor rounded-md text-bgColor mt-4'>CONTINUAR</button>

            <div className='flex flex-col mt-4 text-bgColor gap-2 text-sm font-semibold'>
                <Link to="/remove">Remover saldo</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Add