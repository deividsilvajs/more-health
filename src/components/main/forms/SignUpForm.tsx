import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { UserContext } from '../../../user/UserContext'
import { loaderIcon } from '../../../formUtils/icons-buttons'
import create from '../../../formUtils/enterOrCreate'
import hideForm from '../../../formUtils/hideForm'
import { Button, FormEvent, Props, formClass } from '../../../types/form'

const SignUpForm = ({ hide }: Props) => {

    const navigate = useNavigate()
    const button = useRef<Button>(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const [, setUser] = useContext(UserContext)

    const [showLoader, setShowLoader] = useState(false)

    function createAccount(e: FormEvent) {
        e.preventDefault()
        loaderIcon(button.current, setShowLoader)
        const user = { name, email, password, weight, height }
        const uri = 'http://localhost:8080/signUp'
        create(user, uri, setUser, navigate, button.current, setShowLoader)
    }

    return (
        <div className='form' onClick={e => hideForm(e, hide)}>
            <form onSubmit={e => createAccount(e)}>
                <div className={formClass}>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>Nome</label>
                        <input onChange={e => setName(e.target.value)} className='form-control' type='text' required />
                    </div>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} className='form-control' type='email' required />
                    </div>
                    <div className='input-group'>
                        <label className='input-group-text'>Senha</label>
                        <input onChange={e => setPassword(e.target.value)} className='form-control' type='password' required />
                    </div>
                    <div className='d-flex justify-content-around my-4'>
                        <div className='d-flex flex-column align-items-center'>
                            <label>Peso</label>
                            <input onChange={e => setWeight(e.target.value)} className='w-25 text-center' type='text' required />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <label>Altura (cm)</label>
                            <input onChange={e => setHeight(e.target.value)} className='w-25 text-center' type='text' required />
                        </div>
                    </div>
                    <button ref={button} className='btn btn-outline-primary' type='submit'>Cadastrar</button>
                    {showLoader ? <Loader className='align-self-center loader' /> : null}
                </div>
            </form>
        </div>
    )

}

export default SignUpForm