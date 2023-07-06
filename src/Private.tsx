import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './User/UserContext'

const Private = () => {

    const [user] = useContext(UserContext)

    return (
        user.name ? <Outlet /> : <Navigate to='/' />
    )

}

export default Private