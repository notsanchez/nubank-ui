import React from 'react'
import Add from '../components/Add'
import { AuthContext } from '../context/StateProvider';

const AddFounds = () => {

    const { data } = React.useContext(AuthContext);

    const datajson = JSON.parse(data)

  return (
    <div>
        <Add atualbalance={datajson.balance} user={datajson.id}/>
    </div>
  )
}

export default AddFounds