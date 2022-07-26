import React from 'react'
import CardSlider from './components/CardSlider'
import Header from './components/Header'
import SideCards from './components/SideCards'
import AccountHome from './pages/AccountHome'
import AccountDashboard from './pages/AccountDashboard'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import AddFounds from './pages/AddFounds'
import RemoveFounds from './pages/RemoveFounds'
import { AuthContext } from './context/StateProvider';

const App = () => {

  const { user } = React.useContext(AuthContext);


  return (
    <div className='h-screen w-screen bg-bgColor'>
      <Routes>
        {user ? (
          <>
            <Route path="/add" element={<AddFounds/>}/>
            <Route path="/remove" element={<RemoveFounds/>}/>
            <Route path="/" element={<AccountHome/>}/>
            <Route path="/dash" element={<AccountDashboard/>}/> 
          </>
        ) : (
          <>
            <Route path="/" element={<Login/>}/>
            <Route path="/create" element={<CreateAccount/>}/>
          </>
        )}
        
      </Routes>
    </div>
  )
}

export default App