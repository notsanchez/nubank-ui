import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = (props) => {

  return (
    <div className='flex flex-col justify-center items-center h-40'>
        <Link to="/dash" className='items-center justify-center flex flex-col'>
            <h1 className='font-semibold text-2xl text-white'>{props.name}</h1>
        
            <MdKeyboardArrowDown className='text-4xl text-white'/>
        </Link>
    </div>
  )
}

export default Header