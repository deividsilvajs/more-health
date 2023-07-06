import React from 'react'
import { Props } from './CardsProps'

const Bulking = ({ user }: Props) => {

    return (
        <div className='card w-75 p-4 my-3 text-bg-success'>
            <div className='card-header d-flex justify-content-between'>
                <h4>Ganho de Massa Muscular</h4>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Carboidrato</h5>
                    <h5>{user.bulkingCarbo()[0]}g a {user.bulkingCarbo()[1]}g</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Proteína</h5>
                    <h5>{user.bulkingProt()[0]}g a {user.bulkingProt()[1]}g</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Gordura</h5>
                    <h5>{user.bulkingFat()[0]}g a {user.bulkingFat()[1]}g</h5>
                </div>
            </div>
        </div>
    )

}

export default Bulking