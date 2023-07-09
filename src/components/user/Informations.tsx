import React from 'react'
import { Props } from '../../types/cardsProps'
import { User as UserIcon } from 'lucide-react'

interface CustomProps extends Props {
    showEditAccount: () => void
}

const Informations = ({ user, showEditAccount }: CustomProps) => {

    return (
        <div className='card w-75 p-4 my-3'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                <h3>Olá, {user.name}</h3>
                <button onClick={() => showEditAccount()} className='btn'>
                    <UserIcon />
                </button>
            </div>
            <div className='card-body d-flex flex-column'>
                <h4 className='text-decoration-underline mb-2'>Suas informações:</h4>
                <h5>Peso: {user.weight}kg</h5>
                <h5>Altura: {user.height}cm</h5>
                <h5>IMC: {user.imc()}</h5>
                <h5>Água Diária: {user.water()}ml</h5>
            </div>
        </div>
    )

}

export default Informations