import React, { useState, useEffect } from 'react'
import { MdCreditCard, MdFastfood, MdKeyboardArrowRight } from 'react-icons/md'

const CardSlider = (props) => {

  return (
    <div
    className={`w-full flex items-center justify-center gap-12 '`}
    >
            <div  className='w-300 h-[330px] bg-gray-100 rounded-md p-4 flex flex-col drop-shadow-2xl items-start justify-between'>

                <div>
                    <MdCreditCard className='text-xl'/>
                </div>

                <div className='flex flex-col gap-2'>
                    {props.balance >= 0 ? (
                    <>
                      <h1 className='text-md text-greenFigma'>SEU SALDO</h1>
                      <h1 className='text-4xl text-greenFigma font-semibold'><span className='font-normal'>R$</span> {props.balance}</h1>

                      <h1 className='text-sm text-grayFigma'>VENCIMENTO 25 MAI</h1>

                      <button className='border-2 border-greenFigma px-4 rounded-md text-greenFigma'>ENTRADAS E SAIDAS</button>
                    </>) : (
                    <>
                      <h1 className='text-md text-red-500'>SEU SALDO</h1>
                      <h1 className='text-4xl text-red-500 font-semibold'><span className='font-normal'>R$</span> {props.balance}</h1>

                      <h1 className='text-sm text-grayFigma'>VENCIMENTO 25 MAI</h1>

                      <button className='border-2 text-red-500 px-4 rounded-md'>ENTRADAS E SAIDAS</button>
                    </>)}
                    
                </div>

                <div className='flex items-center gap-6'>
                    {props.exit >= 1 ? (<>
                      <h1 className='text-md text-start'>Sua ultima retirada foi de R$ {props.exit}</h1>
                      <MdKeyboardArrowRight className='text-4xl'/>
                    </>) : (<></>)}
                    
                </div>
            </div>
            
    </div>
  )
}

export default CardSlider