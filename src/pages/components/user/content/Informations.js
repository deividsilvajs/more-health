import { useContext } from 'react';
import { UserContext } from './UserContext';

function Informations(props) {

    const [user] = useContext(UserContext);

    return (
        <div className='card w-75 p-4 my-3'>
            <div className='card-header'>
                <h3>Olá {user.name}, suas informações:</h3>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <div>
                    <h5>Peso: {user.weight}kg</h5>
                    <h5>Altura: {user.height}cm</h5>
                    <h5 id='imc'>IMC: {user.imc}</h5>
                    <h5 id='water'>Água Diária: {user.water}ml</h5>
                </div>
                <button onClick={() => props.showUpdateWeight()} className='btn btn-outline-secondary align-self-center'>Atualizar Peso</button>
            </div>
        </div>
    );

};

export default Informations;