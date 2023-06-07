import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm(props) {

    const navigate = useNavigate();
    const button = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    function hideSignUp(e) {
        if (e.target.classList[0] === 'form') {
            props.hideSignUp();
        };
    };

    function waitingButton(button) {
        button.classList = 'btn align-self-center';
        button.innerText = 'Carregando...';
    };

    function defaultButton(button) {
        button.classList = 'btn btn-primary align-self-center';
        button.innerText = 'Cadastrar';
    }

    function createAccount(e) {
        e.preventDefault();
        waitingButton(button.current);
        const user = { name, email, password, weight, height };
        const options = {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(user)
        };
        fetch('http://localhost:8080/signUp', options)
            .then(res => {
                if (res.status === 200) {
                    res.text().then(id => navigate(`/userPage/${id}`));
                } else {
                    setTimeout(() => {
                        res.text().then(text => {
                            alert(text);
                            defaultButton(button.current);
                        });
                    }, 500);
                }
            }).catch(err => alert(err));
    };

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
                </div>
            </form>
        </div>
    );

};

export default SignUpForm;