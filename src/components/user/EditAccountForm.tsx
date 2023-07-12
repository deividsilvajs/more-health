import React, { useContext, useState } from 'react'
import hideForm from '../../formUtils/hideForm'
import { FormEvent, Props } from '../../types/form'
import User from '../../user/user'
import updateUser from '../../formUtils/updateUser'
import { UserContext } from '../../user/UserContext'

const EditAccountForm = ({ hide }: Props) => {

    const [user, setUser] = useContext(UserContext)

    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const updateAccount = (e: FormEvent) => {

        e.preventDefault()

        const account = updateUser(user, name, weight, height)

        sessionStorage.setItem('user', JSON.stringify(account))
        const updatedUser = new User(account)
        setUser(updatedUser)

        const options = {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(account)
        }

        // Atualizando usuário no banco de dados
        fetch('http://localhost:8080/update', options)

        hide()

    }

    return (
        <div onClick={e => hideForm(e, hide)} className='form'>
            <form onSubmit={e => updateAccount(e)}>
                <div className='card py-3 d-flex flex-column align-items-center'>
                    <div className='input-group w-50'>
                        <label className='input-group-text'>Nome</label>
                        <input onChange={e => setName(e.target.value)} className='form-control' type='text' />
                    </div>
                    <div className='d-flex justify-content-around my-4'>
                        <div className='d-flex flex-column align-items-center'>
                            <label>Peso</label>
                            <input onChange={e => setWeight(e.target.value)} className='w-25' type='text' />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <label>Altura (cm)</label>
                            <input onChange={e => setHeight(e.target.value)} className='w-25' type='text' />
                        </div>
                    </div>
                    <button className='btn btn-primary'>Confirmar</button>
                </div>
            </form>
        </div>
    )

}

export default EditAccountForm