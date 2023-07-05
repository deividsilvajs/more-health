import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { UserContext } from '../../../User/UserContext'
import { loaderIcon } from '../../../formUtils/icons-buttons'
import { formFetch } from '../../../formUtils/fetch'
import { Button, Props } from '../../../formUtils/Types'

const LoginForm = ({ hide }: Props) => {

    const navigate = useNavigate()
    const button = useRef<Button>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showLoader, setShowLoader] = useState(false)

    const [, setUser] = useContext(UserContext)

    function hideLogin(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = e.target as HTMLDivElement
        if (target.classList[0] === 'form') {
            hide()
        }
    }

    function enterTheAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        loaderIcon(button.current, setShowLoader)
        const user = { email, password }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:8080/login', options)
            .then(res => formFetch(res, navigate, button.current, setShowLoader, setUser))
            .catch(err => alert(err))
    }

    return (
        <div className='form' onClick={e => hideLogin(e)}>
            <form onSubmit={e => enterTheAccount(e)}>
                <div className='d-flex flex-column card p-5'>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} className='form-control' type='email' required />
                    </div>
                    <div className='input-group mb-4'>
                        <label className='input-group-text'>Senha</label>
                        <input onChange={e => setPassword(e.target.value)} className='form-control' type='password' required />
                    </div>
                    <button ref={button} className='btn btn-primary align-self-center' type='submit'>Entrar</button>
                    {showLoader ? <Loader className='align-self-center loader' /> : null}
                </div>
            </form>
        </div>
    )

}

export default LoginForm