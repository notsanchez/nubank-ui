import React, { useState, useEffect } from 'react'
import CardSlider from '../components/CardSlider'
import Header from '../components/Header'
import SideCards from '../components/SideCards'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/StateProvider';
import axios from 'axios';

const AccountHome = () => {

  const { user } = React.useContext(AuthContext);
  const [data, setData] = useState('');

  useEffect(() => {
      axios.get('http://localhost:3001/users/' + JSON.parse(user) ).then(function(res){
        setData(res.data)
        localStorage.setItem("data", JSON.stringify(res.data))
      }).catch(function(err){
        console.log(err)
      })
  },[])

  window.onload = function() {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }
  
  return (
    <motion.div 
    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    className='flex flex-col h-screen w-screen bg-bgColor overflow-hidden'>
      <Header name={data.id}/>
      <CardSlider balance={data.balance} exit={data.exits}/>
      <SideCards />
    </motion.div>
  )
}

export default AccountHome