import { useState, useRef } from 'react';

function UpdateWeightForm(props) {

    const [newWeight, setNewWeight] = useState(0);
    const button = useRef();

    function hideUpdateWeight(e) {
        if (e.target.classList[0] === 'form') {
            props.hideUpdateWeight();
        };
    };

    function waitingButton(button) {
        button.classList = 'btn align-self-center';
        button.innerText = 'Carregando...';
    };

    function updateWeight(e) {
        e.preventDefault();
        waitingButton(button.current);
        const payload = { id: props.id, newWeight };
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('http://localhost:8080/updateWeight', options)
            .then(() => props.hideUpdateWeight());
    }

    return (
        <div className='form' onClick={e => hideUpdateWeight(e)}>
            <form onSubmit={e => updateWeight(e)}>
                <div className='d-flex flex-column card p-5 align-items-center'>
                    <div className='input-group mb-4 w-50'>
                        <label className='input-group-text'>Peso</label>
                        <input onChange={e => setNewWeight(e.target.value)} className='form-control' type='text' required />
                    </div>
                    <button ref={button} className='btn btn-primary align-self-center' type='submit'>Atualizar</button>
                </div>
            </form>
        </div>
    );

};

export default UpdateWeightForm;