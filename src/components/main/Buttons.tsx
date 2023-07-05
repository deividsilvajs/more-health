import React from 'react'

interface Props {
    showLogin: () => void
    showSignUp: () => void
}

const Buttons = ({ showLogin, showSignUp }: Props) => {

    return (
        <div className='d-flex flex-column'>
            <button onClick={() => showLogin()} className='btn btn-success mb-2'>Entrar</button>
            <button onClick={() => showSignUp()} className='btn btn-primary'>Cadastrar-se</button>
        </div>
    )

}

export default Buttons