import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {

    const navigate = useNavigate();
    const button = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function hideLogin(e) {
        if (e.target.classList[0] === 'form') {
            props.hideLogin();
        };
    };

    function waitingButton(button) {
        button.classList = 'btn align-self-center';
        button.innerText = 'Carregando...';
    };

    function defaultButton(button) {
        button.classList = 'btn btn-primary align-self-center';
        button.innerText = 'Entrar';
    };

    function enterTheAccount(e) {
        e.preventDefault();
        waitingButton(button.current);
        const user = { email, password };
        const options = {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(user)
        };
        fetch('http://localhost:8080/login', options)
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
                </div>
            </form>
        </div>
    );

};

export default LoginForm;