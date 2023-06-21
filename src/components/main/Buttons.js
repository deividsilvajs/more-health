const Buttons = (props) => {

    return (
        <div className='d-flex flex-column'>
            <button onClick={() => props.showLogin()} className='btn btn-success mb-2'>Entrar</button>
            <button onClick={() => props.showSignUp()} className='btn btn-primary'>Cadastrar-se</button>
        </div>
    )

}

export default Buttons