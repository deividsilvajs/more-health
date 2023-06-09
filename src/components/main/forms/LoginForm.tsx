import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { UserContext } from '../../../user/UserContext'
import { loaderIcon } from '../../../formUtils/icons-buttons'
import enter from '../../../formUtils/enterOrCreate'
import hideForm from '../../../formUtils/hideForm'
import { Button, FormEvent, Props, formClass } from '../../../types/form'

const LoginForm = ({ hide }: Props) => {

    const navigate = useNavigate()
    const button = useRef<Button>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showLoader, setShowLoader] = useState(false)

    const [, setUser] = useContext(UserContext)

    function enterTheAccount(e: FormEvent) {
        e.preventDefault()
        loaderIcon(button.current, setShowLoader)
        const user = { email, password }
        const uri = 'http://localhost:8080/login'
        enter(user, uri, setUser, navigate, button.current, setShowLoader)
    }

    return (
        <div className='form' onClick={e => hideForm(e, hide)}>
            <form onSubmit={e => enterTheAccount(e)}>
                <div className={formClass}>
                    <div className='input-group mb-2'>
                        <label className='input-group-text'>E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} className='form-control' type='email' required />
                    </div>
                    <div className='input-group mb-4'>
                        <label className='input-group-text'>Senha</label>
                        <input onChange={e => setPassword(e.target.value)} className='form-control' type='password' required />
                    </div>
                    <button ref={button} className='btn btn-outline-primary' type='submit'>Entrar</button>
                    {showLoader ? <Loader className='align-self-center loader' /> : null}
                </div>
            </form>
        </div>
    )

}

export default LoginForm