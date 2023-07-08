import React from 'react'
import { Props } from '../../types/cardsProps'

const Informations = ({ user }: Props) => {

    return (
        <div className='card w-75 p-4 my-3'>
            <div className='card-header'>
                <h3>Olá {user.name}, suas informações:</h3>
            </div>
            <div className='card-body d-flex flex-column'>
                <h5>Peso: {user.weight}kg</h5>
                <h5>Altura: {user.height}cm</h5>
                <h5>IMC: {user.imc()}</h5>
                <h5>Água Diária: {user.water()}ml</h5>
            </div>
        </div>
    )

}

export default Informations