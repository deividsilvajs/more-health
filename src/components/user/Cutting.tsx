import React from 'react'
import { CardsProps as Props } from '../../User/IUser'

const Cutting = ({ user }: Props) => {

    return (
        <div className='card w-75 p-4 my-3 text-bg-danger'>
            <div className='card-header d-flex justify-content-between'>
                <h4>Perda de Gordura</h4>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Carboidrato</h5>
                    <h5>{user.cuttingCarbo()[0]}g a {user.cuttingCarbo()[1]}g</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Proteína</h5>
                    <h5>{user.cuttingProt()[0]}g a {user.cuttingProt()[1]}g</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>Gordura</h5>
                    <h5>{user.cuttingFat()[0]}g a {user.cuttingFat()[1]}g</h5>
                </div>
            </div>
        </div>
    )

}

export default Cutting