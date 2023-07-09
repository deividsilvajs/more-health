import React from 'react'
import hideForm from '../../formUtils/hideForm'
import { Props } from '../../types/form'

const EditAccountForm = ({ hide }: Props) => {

    return (
        <div onClick={e => hideForm(e, hide)} className='form'>
            <div className='card p-5'>
                Hello, World
            </div>
        </div>
    )

}

export default EditAccountForm