import React from 'react'
import { MdKeyboardArrowLeft, MdExitToApp, MdAttachMoney, MdOutlineQrCode2, MdSend } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/StateProvider';

const AccountDashboard = () => {

    const { data } = React.useContext(AuthContext);

    const datajson = JSON.parse(data)

    const logOut = () => {
        localStorage.clear()
        window.location.replace("/");
    }

  return (
    <motion.div 
    initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -200 }}

    className='bg-white h-screen w-screen'>
        <div className='flex justify-between items-center p-6'>
            <Link to="/">
                <MdKeyboardArrowLeft className='text-2xl' />
            </Link>

            <MdExitToApp onClick={logOut} className='text-2xl'/>
        </div>

        <div className='flex flex-col justify-center items-center h-96'>

            <div className='h-20 w-20 border-2 border-bgColor rounded-full mb-5'>
                <img src="" alt="" className='object-contain'/>
            </div>


            <h1 className='text-3xl font-semibold'>R$ {datajson.balance}</h1>

            <h1 className='text-sm font-semibold text-center'>Você ja ganhou <br/> <span className='text-greenFigma'>R$ 1,39</span> neste mês</h1>
        </div>

        <div className='flex items-center justify-evenly h-96'>
            <button className='flex flex-col items-center'>
                <MdAttachMoney className='text-2xl text-bgColor'/>
                <h1 className='text-sm'>Minha conta</h1>
            </button>

            <button className='flex flex-col items-center'>
                <MdOutlineQrCode2 className='text-2xl text-bgColor'/>
                <h1 className='text-sm'>Pagar</h1>
            </button>

            <button className='flex flex-col items-center'>
                <MdSend className='text-2xl text-bgColor'/>
                <h1 className='text-sm'>Transferir</h1>
            </button>

        </div>
    </motion.div>
  )
}

export default AccountDashboard