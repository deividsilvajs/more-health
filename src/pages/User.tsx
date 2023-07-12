import React, { useContext, useState } from 'react'
import { UserContext } from '../user/UserContext'
import Informations from '../components/user/Informations'
import Bulking from '../components/user/Bulking'
import Cutting from '../components/user/Cutting'
import EditAccountForm from '../components/user/EditAccountForm'

const User = () => {

    const [user] = useContext(UserContext)

    const [showEditAccount, setShowEditAccount] = useState(false)

    const changeEditAccountState = () => {
        setShowEditAccount(!showEditAccount)
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <Informations user={user} showEditAccount={changeEditAccountState} />
            <h3>Recomendação Diária</h3>
            <Bulking user={user} />
            <Cutting user={user} />
            {showEditAccount ? <EditAccountForm hide={changeEditAccountState} /> : null}
        </div>
    )

}

export default User