import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { UserContext } from '../../../User/UserContext'
import { loaderIcon } from '../../../formUtils/icons-buttons'
import { formFetch } from '../../../formUtils/fetch'
import { Button, Props } from '../../../formUtils/Types'

const SignUpForm = ({hide}: Props) => {

    const navigate = useNavigate()
    const button = useRef<Button>(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const [, setUser] = useContext(UserContext)

    const [showLoader, setShowLoader] = useState(false)

    function hideSignUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = e.target as HTMLDivElement
        if (target.classList[0] === 'form') {
            hide()
        }
    }

    function createAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        loaderIcon(button.current, setShowLoader)
        const user = { name, email, password, weight, height }
        const options = {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(user)
        }
        fetch('http://localhost:8080/signUp', options)
            .then(res => formFetch(res, navigate, button.current, setShowLoader, setUser))
            .catch(err => alert(err))
    }

    return (
        <div className='form' onClick={e => hideSignUp(e)}>
            <form onSubmit={e => createAccount(e)}>
                <div className='d-flex flex-column card p-5'>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>Nome</label>
                        <input onChange={e => setName(e.target.value)} className='form-control' type='text' required />
                    </div>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} className='form-control' type='email' required />
                    </div>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>Senha</label>
                        <input onChange={e => setPassword(e.target.value)} className='form-control' type='password' required />
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div className='mb-2 d-flex flex-column align-items-center'>
                            <label>Peso</label>
                            <input onChange={e => setWeight(e.target.value)} className='w-25' type='text' required />
                        </div>
                        <div className='mb-3 d-flex flex-column align-items-center'>
                            <label>Altura (cm)</label>
                            <input onChange={e => setHeight(e.target.value)} className='w-25' type='text' required />
                        </div>
                    </div>
                    <button ref={button} className='btn btn-primary align-self-center' type='submit'>Cadastrar</button>
                    {showLoader ? <Loader className='align-self-center loader' /> : null}
                </div>
            </form>
        </div>
    )

}

export default SignUpForm