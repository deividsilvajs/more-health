import React, { useContext } from 'react'
import { UserContext } from '../user/UserContext'
import Informations from '../components/user/Informations'
import Bulking from '../components/user/Bulking'
import Cutting from '../components/user/Cutting'

const User = () => {

    const [user] = useContext(UserContext)

    return (
        <div className='container d-flex flex-column align-items-center'>
            <Informations user={user} />
            <h3>Recomendação Diária</h3>
            <Bulking user={user} />
            <Cutting user={user} />
        </div>
    )

}

export default User