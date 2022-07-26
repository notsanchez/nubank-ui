import React from 'react'
import Remove from '../components/Remove'
import { AuthContext } from '../context/StateProvider';

const RemoveFounds = () => {

    const { data } = React.useContext(AuthContext);

    const datajson = JSON.parse(data)

  return (
    <div>
        <Remove atualbalance={datajson.balance} user={datajson.id}/>
    </div>
  )
}

export default RemoveFounds