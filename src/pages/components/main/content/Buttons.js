function Buttons(props) {

    return (
        <div className='d-flex flex-column'>
            <button onClick={() => props.showLogin()} className='btn btn-outline-primary mb-2'>Entrar</button>
            <button onClick={() => props.showSignUp()} className='btn btn-outline-secondary'>Cadastrar-se</button>
        </div>
    );

};

export default Buttons;