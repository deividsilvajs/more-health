import React from 'react'
import hideForm from '../../formUtils/hideForm'
import { Props } from '../../types/form'

const EditAccountForm = ({ hide }: Props) => {

    return (
        <div onClick={e => hideForm(e, hide)} className='form'>
            <div className='card py-3 d-flex flex-column align-items-center'>
                <div className='input-group w-50'>
                    <label className='input-group-text'>Nome</label>
                    <input className='form-control' type='text' />
                </div>
                <div className='d-flex justify-content-around my-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <label>Peso</label>
                        <input className='w-25' type='text' required />
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <label>Altura (cm)</label>
                        <input className='w-25' type='text' required />
                    </div>
                </div>
                <button className='btn btn-primary'>Confirmar</button>
            </div>
        </div>
    )

}

export default EditAccountForm