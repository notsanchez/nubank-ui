import React from 'react'
import { MdPersonAdd, MdAttachMoney, MdSendToMobile } from 'react-icons/md'
import { Link } from 'react-router-dom'


const SideCards = () => {
  return (
    <div className='flex items-center justify-center gap-6 my-20'>
        <button className='flex flex-col h-32 w-24 bg-purpleOpacity text-start justify-between rounded-md p-3 drop-shadow-xl'>
            <MdPersonAdd className='text-white text-lg'/>
            <h1 className='text-sm text-white mt-4'>Indicar amigos</h1>
        </button>

        <Link to="/add" className='flex flex-col h-32 w-24 bg-purpleOpacity text-start justify-between rounded-md p-3 drop-shadow-xl'>
              <MdAttachMoney className='text-white text-lg'/>
              <h1 className='text-sm text-white mt-4'>Adicionar</h1>
        </Link>

        <Link to="/remove" className='flex flex-col h-32 w-24 bg-purpleOpacity text-start justify-between rounded-md p-3 drop-shadow-xl'>
            <MdSendToMobile className='text-white text-lg'/>
            <h1 className='text-sm text-white mt-4'>Remover</h1>
        </Link>
    </div>
  )
}

export default SideCards