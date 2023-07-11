import React, { useState } from 'react'
import hideForm from '../../formUtils/hideForm'
import { Props } from '../../types/form'
import { UserState, Person } from '../../types/user'
import User from '../../user/user'
import { weightFormat, heightFormat } from '../../formUtils/updateUser'

interface CustomProps extends Props {
    userState: UserState
}

const EditAccountForm = ({ hide, userState }: CustomProps) => {

    const [user, setUser] = userState

    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const updateAccount = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const account = {} as Person

        name ? account.name = name : account.name = user.name
        weight ? account.weight = weightFormat(weight) : account.weight = user.weight
        height ? account.height = heightFormat(height, user) : account.height = user.height

        sessionStorage.setItem('user', JSON.stringify(account))
        const updatedUser = new User(account)
        setUser(updatedUser)

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